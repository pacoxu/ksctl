package test

import (
	"context"
	"dagger.io/dagger"
	"fmt"
	"os"
)

func CivoTest(ctx context.Context) error {
	fmt.Println("Running Civo test suite")

	// initialize Dagger client
	client, err := dagger.Connect(ctx, dagger.WithLogOutput(os.Stderr))
	if err != nil {
		return err
	}
	defer client.Close()

	// get reference to the local project
	src := client.Host().Directory(".")

	output := client.Container().
		From("golang:latest").
		WithDirectory("/src", src).
		WithWorkdir("/src").
		WithExec([]string{"go", "mod", "tidy"}).
		WithWorkdir("/src/api/provider/civo").
		WithExec([]string{"go", "test", ".", "-v"})

	_, err = output.Stdout(ctx)
	if err != nil {
		fmt.Println("❌ failed (civo)")

		return err
	}
	//fmt.Println(stdout)
	fmt.Println("✔ test case passed (civo)")

	return nil
}
