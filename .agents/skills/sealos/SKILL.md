```markdown
# sealos Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you how to contribute effectively to the `sealos` codebase, a Go-based project with both backend (Go) and frontend (React) components. You'll learn the project's coding conventions, file organization, and the main development workflows for adding features, fixing bugs, updating controllers, managing CRDs, maintaining CI pipelines, refactoring, and updating documentation.

## Coding Conventions

### File Naming
- **Go files:** Use `snake_case` (e.g., `my_controller.go`, `api_types.go`)
- **Frontend files:** Use PascalCase for React components (e.g., `MyComponent.tsx`), and `snake_case` or `kebab-case` for styles.

### Import Style
- Use **alias imports** in Go:
  ```go
  import (
      corev1 "k8s.io/api/core/v1"
      ctrl "sigs.k8s.io/controller-runtime"
  )
  ```

### Export Style
- **Default export** for Go: Exported identifiers start with uppercase.
  ```go
  // Exported type
  type MyController struct {
      // ...
  }

  // Exported function
  func NewMyController() *MyController {
      // ...
  }
  ```

### Commit Message Patterns
- Prefixes: `docs`, `refactor`, `fix`, `feat`
- Example: `fix: correct resource limits in deployment manifest`

## Workflows

### Add or Update Kubernetes Controller
**Trigger:** When introducing a new Kubernetes controller or updating an existing one  
**Command:** `/add-controller`

1. Create or update API type definitions (e.g., `*_types.go`)
2. Update or add CRD YAMLs under `config/crd/bases/`
3. Implement or update controller logic in `controllers/xxx/controllers/`
4. Update or add deployment manifests (`deploy/`, `config/manager/`, etc.)
5. Update `Makefile`, `Dockerfile`, and `PROJECT` files as needed
6. Add or update documentation (`README.md`, `deploy/README.md`, etc.)
7. Update `go.mod`, `go.sum`, and `go.work` as needed

**Example:**  
```go
// controllers/myresource/api/v1/myresource_types.go
type MyResourceSpec struct {
    // ...
}
```
```yaml
# controllers/myresource/config/crd/bases/myresource.yaml
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
# ...
```

---

### Frontend Feature or Bugfix
**Trigger:** When adding a new frontend feature or fixing a UI/UX bug  
**Command:** `/frontend-feature`

1. Edit or add React component files (`*.tsx`)
2. Edit or add SCSS/CSS module files (`*.module.scss`, `*.scss`)
3. Update or add state/store files (`*.ts`)
4. Update or add type/interface files (`*.ts`)
5. Optionally update public assets (images, icons)

**Example:**  
```tsx
// frontend/app/src/components/MyButton.tsx
export default function MyButton() {
    return <button className="my-btn">Click me</button>;
}
```
```scss
// frontend/app/src/components/MyButton.module.scss
.my-btn {
    background: #0057ff;
}
```

---

### Update CRD and Sample
**Trigger:** When changing the schema or behavior of a CRD  
**Command:** `/update-crd`

1. Edit Go type definitions (`api/v1/*_types.go`)
2. Update CRD YAMLs (`config/crd/bases/*.yaml`)
3. Update sample YAMLs (`config/samples/*.yaml`)
4. Optionally update documentation or example manifests

**Example:**  
```go
// controllers/myresource/api/v1/myresource_types.go
type MyResourceSpec struct {
    Replicas int `json:"replicas"`
}
```
```yaml
# controllers/myresource/config/samples/myresource_sample.yaml
apiVersion: mygroup/v1
kind: MyResource
spec:
  replicas: 3
```

---

### CI Pipeline or Workflow Update
**Trigger:** When adding, fixing, or updating CI/CD workflows  
**Command:** `/update-ci`

1. Edit or add YAML workflow files under `.github/workflows/`
2. Optionally update related documentation or contributing guidelines

**Example:**  
```yaml
# .github/workflows/test.yml
name: Test
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run tests
        run: make test
```

---

### Refactor or Enhance Backend Go Modules
**Trigger:** When refactoring backend logic, renaming interfaces, or enhancing backend features  
**Command:** `/refactor-backend`

1. Edit multiple Go source files in a package
2. Update `go.mod` and `go.sum` as needed
3. Optionally update tests

**Example:**  
```go
// pkg/utils/string_utils.go
func ToSnakeCase(s string) string {
    // ...
}
```

---

### Documentation Update
**Trigger:** When updating or adding documentation  
**Command:** `/update-docs`

1. Edit or add Markdown files in `docs/` or `README.md`
2. Optionally update i18n versions

**Example:**  
```markdown
# MyResource Controller
This document explains how to use the MyResource controller...
```

---

## Testing Patterns

- **Test files:** Named with `_test.go` suffix (e.g., `my_controller_test.go`)
- **Framework:** Not explicitly specified, but standard Go testing is implied.
- **Example:**
  ```go
  // pkg/controllers/my_controller_test.go
  import "testing"

  func TestMyController(t *testing.T) {
      // ...
  }
  ```

## Commands
| Command            | Purpose                                                      |
|--------------------|--------------------------------------------------------------|
| /add-controller    | Add or update a Kubernetes controller                        |
| /frontend-feature  | Implement a frontend feature or bugfix                       |
| /update-crd        | Update a CRD and its sample YAMLs and Go types               |
| /update-ci         | Update or add CI/CD pipeline configuration                   |
| /refactor-backend  | Refactor or enhance backend Go modules                       |
| /update-docs       | Update documentation files                                   |
```
