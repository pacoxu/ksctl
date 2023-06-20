package test

import (
	"context"
	"fmt"
	"os"

	"dagger.io/dagger"
)

func BuildCliTest(ctx context.Context) error {
	fmt.Println("Building ksctl")
	oses := []string{"linux", "darwin", "windows"}
	arches := []string{"amd64", "arm64"}
	goVersions := []string{"1.19", "1.20"}

	client, err := dagger.Connect(ctx, dagger.WithLogOutput(os.Stderr))
	if err != nil {
		return err
	}
	defer client.Close()

	src := client.Host().Directory(".")
	for _, version := range goVersions {
		imageTag := fmt.Sprintf("golang:%s", version)
		golang := client.Container().
			From(imageTag).
			WithDirectory("/src", src).
			WithWorkdir("/src")

		for _, goos := range oses {
			for _, goarch := range arches {
				path := fmt.Sprintf("build/%s/%s/%s/ksctl", version, goos, goarch)

				golang = golang.
					WithEnvVariable("GOOS", goos).
					WithEnvVariable("GOARCH", goarch)

				output := golang.
					WithExec([]string{"go", "mod", "tidy"}).
					WithExec([]string{"go", "build", "-o", path, "cli/main.go"})

				_, err = output.Stdout(ctx)
				if err != nil {
					fmt.Printf("❌ failed (cli) %s %s %s\n", goarch, goos, version)

					return err
				}
				fmt.Printf("✔ test case passed (cli) %s %s %s\n", goarch, goos, version)
			}
		}
	}

	return nil
}
