package test

import (
	"context"
	"dagger.io/dagger"
	"fmt"
	"os"
)

func BuildCliTest(ctx context.Context) error {
	fmt.Println("Building ksctl")

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
		WithExec([]string{"go", "build", "-o", "ksctl", "cli/main.go"}).
		WithExec([]string{"./ksctl", "version"})

	_, err = output.Stdout(ctx)
	if err != nil {
		fmt.Println("❌ failed (cli)")

		return err
	}
	fmt.Println("✔ test case passed (cli)")

	return nil
}
