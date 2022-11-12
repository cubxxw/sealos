// Copyright © 2021 Alibaba Group Holding Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// k3s runtime module
package k3s

// K3sRuntime is a runtime struct for k3s.
type K3sRuntime struct {
	*BaseRuntime
}

func (k *k3sRuntime) init() error {
	return nil
}

func (k *k3sRuntime) install() error {
	return nil
}
