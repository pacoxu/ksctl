// Code generated by goa v3.13.0, DO NOT EDIT.
//
// server HTTP client CLI support package
//
// Command:
// $ goa gen github.com/kubesimplify/ksctl/httpserver/design -o httpserver

package cli

import (
	"flag"
	"fmt"
	"net/http"
	"os"

	httpserverc "github.com/kubesimplify/ksctl/httpserver/gen/http/httpserver/client"
	goahttp "goa.design/goa/v3/http"
	goa "goa.design/goa/v3/pkg"
)

// UsageCommands returns the set of commands and sub-commands using the format
//
//	command (subcommand1|subcommand2|...)
func UsageCommands() string {
	return `httpserver get-health
`
}

// UsageExamples produces an example of a valid invocation of the CLI tool.
func UsageExamples() string {
	return os.Args[0] + ` httpserver get-health` + "\n" +
		""
}

// ParseEndpoint returns the endpoint and payload as specified on the command
// line.
func ParseEndpoint(
	scheme, host string,
	doer goahttp.Doer,
	enc func(*http.Request) goahttp.Encoder,
	dec func(*http.Response) goahttp.Decoder,
	restore bool,
) (goa.Endpoint, any, error) {
	var (
		httpserverFlags = flag.NewFlagSet("httpserver", flag.ContinueOnError)

		httpserverGetHealthFlags = flag.NewFlagSet("get-health", flag.ExitOnError)
	)
	httpserverFlags.Usage = httpserverUsage
	httpserverGetHealthFlags.Usage = httpserverGetHealthUsage

	if err := flag.CommandLine.Parse(os.Args[1:]); err != nil {
		return nil, nil, err
	}

	if flag.NArg() < 2 { // two non flag args are required: SERVICE and ENDPOINT (aka COMMAND)
		return nil, nil, fmt.Errorf("not enough arguments")
	}

	var (
		svcn string
		svcf *flag.FlagSet
	)
	{
		svcn = flag.Arg(0)
		switch svcn {
		case "httpserver":
			svcf = httpserverFlags
		default:
			return nil, nil, fmt.Errorf("unknown service %q", svcn)
		}
	}
	if err := svcf.Parse(flag.Args()[1:]); err != nil {
		return nil, nil, err
	}

	var (
		epn string
		epf *flag.FlagSet
	)
	{
		epn = svcf.Arg(0)
		switch svcn {
		case "httpserver":
			switch epn {
			case "get-health":
				epf = httpserverGetHealthFlags

			}

		}
	}
	if epf == nil {
		return nil, nil, fmt.Errorf("unknown %q endpoint %q", svcn, epn)
	}

	// Parse endpoint flags if any
	if svcf.NArg() > 1 {
		if err := epf.Parse(svcf.Args()[1:]); err != nil {
			return nil, nil, err
		}
	}

	var (
		data     any
		endpoint goa.Endpoint
		err      error
	)
	{
		switch svcn {
		case "httpserver":
			c := httpserverc.NewClient(scheme, host, doer, enc, dec, restore)
			switch epn {
			case "get-health":
				endpoint = c.GetHealth()
				data = nil
			}
		}
	}
	if err != nil {
		return nil, nil, err
	}

	return endpoint, data, nil
}

// httpserverUsage displays the usage of the httpserver command and its
// subcommands.
func httpserverUsage() {
	fmt.Fprintf(os.Stderr, `server handlers
Usage:
    %[1]s [globalflags] httpserver COMMAND [flags]

COMMAND:
    get-health: GetHealth implements get health.

Additional help:
    %[1]s httpserver COMMAND --help
`, os.Args[0])
}
func httpserverGetHealthUsage() {
	fmt.Fprintf(os.Stderr, `%[1]s [flags] httpserver get-health

GetHealth implements get health.

Example:
    %[1]s httpserver get-health
`, os.Args[0])
}
