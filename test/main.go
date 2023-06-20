package main

import (
	"context"
	"fmt"
	az "github.com/kubesimplify/ksctl/api/provider/azure/test"
	civo "github.com/kubesimplify/ksctl/api/provider/civo/test"
	loc "github.com/kubesimplify/ksctl/api/provider/local/test"
	"os"
	"sync"

	util "github.com/kubesimplify/ksctl/api/provider/utils/test"
	cli "github.com/kubesimplify/ksctl/cli/test"
)

func ExecUtilsTests(ctx context.Context) error {
	return util.UtilTest(ctx)
}

func ExecAzureTests(ctx context.Context) error {
	return az.AzureTest(ctx)
}

func ExecCivoTests(ctx context.Context) error {
	return civo.CivoTest(ctx)
}

func ExecLocalTests(ctx context.Context) error {
	return loc.LocalTest(ctx)
}

func ExecBuildTest(ctx context.Context) error {
	return cli.BuildCliTest(ctx)
}

func CompleteBuildStep() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	errCh := make(chan error, 4)
	var wg sync.WaitGroup
	wg.Add(4)
	go func() {
		defer wg.Done()
		if err := ExecUtilsTests(ctx); err != nil {
			errCh <- err
			cancel()
		}
	}()
	go func() {
		defer wg.Done()
		if err := ExecCivoTests(ctx); err != nil {
			errCh <- err
			cancel()
		}
	}()

	go func() {
		defer wg.Done()
		if err := ExecAzureTests(ctx); err != nil {
			errCh <- err
			cancel()
		}
	}()
	go func() {
		defer wg.Done()
		if err := ExecLocalTests(ctx); err != nil {
			errCh <- err
			cancel()
		}
	}()

	go func() {
		wg.Wait()
		close(errCh)
	}()

	failed := false
	for err := range errCh {
		if err != nil {
			failed = true
			fmt.Printf("Function failed: %s\n", err)
		}
	}

	if failed {
		fmt.Println("One or more functions failed")
	} else {
		fmt.Println("All functions finished successfully")
	}
	if err := ExecBuildTest(ctx); err != nil {
		fmt.Println("build of ksctl failed")
		cancel()
	}

	fmt.Println("Done")
}

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	fmt.Println("len", len(os.Args))

	if len(os.Args) == 1 || len(os.Args) > 2 {
		panic(`
HELP command to use

"""
dagger run go run test/main.go <number>
"""
	[0] all the tests
	[1] Build Tests
	[2] Unit Civo
	[3] Unit Azure
	[4] Unit Local
	[5] Unit Utils
`)
	}

	switch os.Args[1] {
	case "0":
		CompleteBuildStep()
	case "1":
		err := ExecBuildTest(ctx)
		if err != nil {
			panic("build of ksctl failed")
		}
	case "2":
		err := ExecCivoTests(ctx)
		if err != nil {
			panic("Unit test failed for Civo failed")
		}
	case "3":
		err := ExecAzureTests(ctx)
		if err != nil {
			panic("Unit test failed for Azure failed")
		}
	case "4":
		err := ExecLocalTests(ctx)
		if err != nil {
			panic("Unit test failed for Local failed")
		}
	case "5":
		err := ExecUtilsTests(ctx)
		if err != nil {
			panic("Unit test failed for Utils failed")
		}
	default:
		panic("Invalid choice")
	}
}
