// Code generated by goa v3.13.0, DO NOT EDIT.
//
// httpserver HTTP server encoders and decoders
//
// Command:
// $ goa gen github.com/kubesimplify/ksctl/httpserver/design -o httpserver

package server

import (
	"context"
	"net/http"

	httpserver "github.com/kubesimplify/ksctl/httpserver/gen/httpserver"
	goahttp "goa.design/goa/v3/http"
)

// EncodeGetHealthResponse returns an encoder for responses returned by the
// httpserver get health endpoint.
func EncodeGetHealthResponse(encoder func(context.Context, http.ResponseWriter) goahttp.Encoder) func(context.Context, http.ResponseWriter, any) error {
	return func(ctx context.Context, w http.ResponseWriter, v any) error {
		res, _ := v.(*httpserver.Health)
		enc := encoder(ctx, w)
		body := NewGetHealthResponseBody(res)
		w.WriteHeader(http.StatusOK)
		return enc.Encode(body)
	}
}