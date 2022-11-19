## sealos reset

simplest way to reset your cluster

### Synopsis

sealos reset --name [arg]

```
sealos reset [flags]
```

### Examples

```

reset you current cluster:
	sealos reset --name xxx [--force]

```

### Options

```
      --cluster string     name of cluster to applied reset action (default "default")
      --force              we also can input an --force flag to reset cluster by force
  -h, --help               help for reset
      --masters string     masters to be reset
      --nodes string       nodes to be reset
  -p, --passwd string      use given password to authenticate with
  -i, --pk string          selects a file from which the identity (private key) for public key authentication is read (default "/root/.ssh/id_rsa")
      --pk-passwd string   passphrase for decrypting a PEM encoded private key
      --port uint16        port to connect to on the remote host (default 22)
  -u, --user string        username to authenticate as
```

### Options inherited from parent commands

```
      --cluster-root string   cluster root directory (default "/var/lib/sealos")
      --debug                 enable debug logger
```

### SEE ALSO

* [sealos](sealos.md)	 - simplest way install kubernetes tools.

###### Auto generated by spf13/cobra on 13-Oct-2022