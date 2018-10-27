
help: 			## Open this help.
	@echo ''
	@echo 'Available commands:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ''
.PHONY: help

dc-up-dev: 	## Up for the dependency services.
	@echo ''
	@echo 'dc-up'
.PHONY: dc-up-dev
