package main

import (
	"context"
	"fmt"
	az "github.com/kubesimplify/ksctl/api/provider/azure/test"
	civo "github.com/kubesimplify/ksctl/api/provider/civo/test"
	loc "github.com/kubesimplify/ksctl/api/provider/local/test"
	util "github.com/kubesimplify/ksctl/api/provider/utils/test"
	cli "github.com/kubesimplify/ksctl/cli/test"
	"sync"
)

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	errCh := make(chan error, 5)
	var wg sync.WaitGroup
	wg.Add(5)
	go func() {
		defer wg.Done()
		if err := util.UtilTest(ctx); err != nil {
			errCh <- err
			cancel()
		}
	}()
	go func() {
		defer wg.Done()
		if err := civo.CivoTest(ctx); err != nil {
			errCh <- err
			cancel()
		}
	}()

	go func() {
		defer wg.Done()
		if err := az.AzureTest(ctx); err != nil {
			errCh <- err
			cancel()
		}
	}()
	go func() {
		defer wg.Done()
		if err := loc.LocalTest(ctx); err != nil {
			errCh <- err
			cancel()
		}
	}()

	go func() {
		defer wg.Done()
		if err := cli.BuildCliTest(ctx); err != nil {
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

	fmt.Println("Done")
}
