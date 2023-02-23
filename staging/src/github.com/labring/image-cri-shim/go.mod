module github.com/labring/image-cri-shim

go 1.19

require (
	github.com/pelletier/go-toml v1.9.5
	github.com/pkg/errors v0.9.1
	google.golang.org/grpc v1.48.0
	k8s.io/apimachinery v0.24.3
	k8s.io/cri-api v0.24.3
	k8s.io/utils v0.0.0-20220728103510-ee6ede2d64ed
)

require (
	github.com/containers/image/v5 v5.22.0 // indirect
	github.com/docker/distribution v2.8.1+incompatible // indirect
	github.com/docker/libtrust v0.0.0-20160708172513-aabc10ec26b7 // indirect
	github.com/gogo/protobuf v1.3.2 // indirect
	github.com/golang/protobuf v1.5.2 // indirect
	github.com/opencontainers/go-digest v1.0.1-0.20220411205349-bde1400a84be // indirect
	github.com/opencontainers/image-spec v1.0.3-0.20220114050600-8b9d41f48198 // indirect
	github.com/sirupsen/logrus v1.9.0 // indirect
	go.uber.org/atomic v1.9.0 // indirect
	go.uber.org/goleak v1.1.12 // indirect
	go.uber.org/multierr v1.8.0 // indirect
	go.uber.org/zap v1.21.0 // indirect
	golang.org/x/net v0.0.0-20220805013720-a33c5aa5df48 // indirect
	golang.org/x/sys v0.0.0-20220829200755-d48e67d00261 // indirect
	golang.org/x/text v0.3.8 // indirect
	google.golang.org/genproto v0.0.0-20220808145710-bf34ca4dd83a // indirect
	google.golang.org/protobuf v1.28.1 // indirect
	gopkg.in/check.v1 v1.0.0-20201130134442-10cb98267c6c // indirect
	gopkg.in/natefinch/lumberjack.v2 v2.0.0 // indirect
	gopkg.in/yaml.v2 v2.4.0 // indirect
)

require (
	github.com/labring/sealos v0.0.0-00010101000000-000000000000
	sigs.k8s.io/yaml v1.3.0
)

replace github.com/labring/sealos => ../../../../../
