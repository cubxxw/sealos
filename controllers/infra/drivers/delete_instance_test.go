package drivers

import (
	"testing"

	"github.com/aws/aws-sdk-go-v2/service/ec2/types"

	v1 "github.com/labring/sealos/controllers/infra/api/v1"
)

func TestDriver_DeleteInstances(t *testing.T) {
	type args struct {
		hosts *v1.Hosts
	}
	tests := []struct {
		name    string
		args    args
		wantErr bool
	}{
		{
			"test delete instance",
			args{hosts: &v1.Hosts{
				Roles:     []string{"master"},
				Count:     2,
				Resources: nil,
				Flavor:    string(types.InstanceTypeT2Micro),
				Arch:      "",
				Image:     "ami-05248307900d52e3a",
				Disks:     nil,
				Metadata: []v1.Metadata{
					{
						ID: "i-bp1b12w8wosiidi8bz77",
					},
					{
						ID: "i-bp1b12w8wosiidi8bz76",
					},
				},
			}},
			false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			//d, err := NewDriver("aliyun")
			//if err != nil {
			//	t.Errorf("create driver failed")
			//}
			//if err := d.DeleteInstances(tt.args.hosts, infra); (err != nil) != tt.wantErr {
			//	t.Errorf("DeleteInstances() error = %v, wantErr %v", err, tt.wantErr)
			//}
		})
	}
}
