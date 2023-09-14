// Code generated by goa v3.13.0, DO NOT EDIT.
//
// httpserver client HTTP transport
//
// Command:
// $ goa gen github.com/kubesimplify/ksctl/httpserver/design -o httpserver

package client

import (
	"context"
	"net/http"

	goahttp "goa.design/goa/v3/http"
	goa "goa.design/goa/v3/pkg"
)

// Client lists the httpserver service endpoint HTTP clients.
type Client struct {
	// GetHealth Doer is the HTTP client used to make requests to the get health
	// endpoint.
	GetHealthDoer goahttp.Doer

	// RestoreResponseBody controls whether the response bodies are reset after
	// decoding so they can be read again.
	RestoreResponseBody bool

	scheme  string
	host    string
	encoder func(*http.Request) goahttp.Encoder
	decoder func(*http.Response) goahttp.Decoder
}

// NewClient instantiates HTTP clients for all the httpserver service servers.
func NewClient(
	scheme string,
	host string,
	doer goahttp.Doer,
	enc func(*http.Request) goahttp.Encoder,
	dec func(*http.Response) goahttp.Decoder,
	restoreBody bool,
) *Client {
	return &Client{
		GetHealthDoer:       doer,
		RestoreResponseBody: restoreBody,
		scheme:              scheme,
		host:                host,
		decoder:             dec,
		encoder:             enc,
	}
}

// GetHealth returns an endpoint that makes HTTP requests to the httpserver
// service get health server.
func (c *Client) GetHealth() goa.Endpoint {
	var (
		decodeResponse = DecodeGetHealthResponse(c.decoder, c.RestoreResponseBody)
	)
	return func(ctx context.Context, v any) (any, error) {
		req, err := c.BuildGetHealthRequest(ctx, v)
		if err != nil {
			return nil, err
		}
		resp, err := c.GetHealthDoer.Do(req)
		if err != nil {
			return nil, goahttp.ErrRequestError("httpserver", "get health", err)
		}
		return decodeResponse(resp)
	}
}
