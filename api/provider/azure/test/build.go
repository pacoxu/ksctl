package test

import (
	"context"
	"dagger.io/dagger"
	"fmt"
	"os"
)

func AzureTest(ctx context.Context) error {
	fmt.Println("Running Azure test suite")

	// initialize Dagger client
	client, err := dagger.Connect(ctx, dagger.WithLogOutput(os.Stderr))
	if err != nil {
		return err
	}
	defer client.Close()
	oses := []string{"linux"}
	// FIXME: only linux is supported to run as platform https://docs.dagger.io/406009/multiplatform-support/#support-for-non-linux-platforms
	//oses := []string{"linux", "darwin", "windows"}

	arches := []string{"amd64"}

	// ISSUE: build times are very high
	//arches := []string{"arm64", "amd64"}

	src := client.Host().Directory(".")

	for _, goos := range oses {
		for _, goarch := range arches {

			platform := dagger.Platform(fmt.Sprintf("%s/%s", goos, goarch))

			golang := client.Container(dagger.ContainerOpts{Platform: platform}).
				From("golang:latest").
				WithDirectory("/src", src).
				WithWorkdir("/src")
			golang = golang.
				WithEnvVariable("GOOS", goos).
				WithEnvVariable("GOARCH", goarch)

			output := golang.
				WithExec([]string{"go", "mod", "tidy"}).
				WithWorkdir("/src/api/provider/azure").
				WithExec([]string{"go", "test", ".", "-v"})

			_, err = output.Stdout(ctx)
			if err != nil {
				fmt.Printf("❌ failed (azure) %s %s\n", goos, goarch)

				return err
			}
			fmt.Printf("✔ test case passed (azure) %s %s\n", goos, goarch)
		}
	}
	return nil
}
