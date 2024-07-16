
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const LSCOLORS: string;
	export const USER_ZDOTDIR: string;
	export const COLORTERM: string;
	export const PYENV_SHELL: string;
	export const LESS: string;
	export const XPC_FLAGS: string;
	export const NVM_INC: string;
	export const no_proxy: string;
	export const TERM_PROGRAM_VERSION: string;
	export const LF_COLORS: string;
	export const NODE: string;
	export const __CFBundleIdentifier: string;
	export const SSH_AUTH_SOCK: string;
	export const MallocNanoZone: string;
	export const MCFLY_KEY_SCHEME: string;
	export const FIG_NEW_SESSION: string;
	export const npm_config_local_prefix: string;
	export const HOMEBREW_PREFIX: string;
	export const GPG_TTY: string;
	export const PWD: string;
	export const LOGNAME: string;
	export const MANPATH: string;
	export const _: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_INJECTION: string;
	export const COMMAND_MODE: string;
	export const HOME: string;
	export const MCFLY_HISTORY: string;
	export const LANG: string;
	export const MCFLY_HISTFILE: string;
	export const npm_package_version: string;
	export const HOMEBREW_NO_ENV_HINTS: string;
	export const TMPDIR: string;
	export const GIT_ASKPASS: string;
	export const LIQUIBASE_HOME: string;
	export const MCFLY_SESSION_ID: string;
	export const INFOPATH: string;
	export const NVM_DIR: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const ZSH: string;
	export const ZDOTDIR: string;
	export const USER: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const HOMEBREW_CELLAR: string;
	export const MCFLY_HISTORY_FORMAT: string;
	export const MCFLY_RESULTS: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NVM_CD_FLAGS: string;
	export const PAGER: string;
	export const HOMEBREW_REPOSITORY: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_package_json: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const PATH: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const NVM_BIN: string;
	export const npm_node_execpath: string;
	export const OLDPWD: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const TERM_PROGRAM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		LSCOLORS: string;
		USER_ZDOTDIR: string;
		COLORTERM: string;
		PYENV_SHELL: string;
		LESS: string;
		XPC_FLAGS: string;
		NVM_INC: string;
		no_proxy: string;
		TERM_PROGRAM_VERSION: string;
		LF_COLORS: string;
		NODE: string;
		__CFBundleIdentifier: string;
		SSH_AUTH_SOCK: string;
		MallocNanoZone: string;
		MCFLY_KEY_SCHEME: string;
		FIG_NEW_SESSION: string;
		npm_config_local_prefix: string;
		HOMEBREW_PREFIX: string;
		GPG_TTY: string;
		PWD: string;
		LOGNAME: string;
		MANPATH: string;
		_: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_INJECTION: string;
		COMMAND_MODE: string;
		HOME: string;
		MCFLY_HISTORY: string;
		LANG: string;
		MCFLY_HISTFILE: string;
		npm_package_version: string;
		HOMEBREW_NO_ENV_HINTS: string;
		TMPDIR: string;
		GIT_ASKPASS: string;
		LIQUIBASE_HOME: string;
		MCFLY_SESSION_ID: string;
		INFOPATH: string;
		NVM_DIR: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		TERM: string;
		npm_package_name: string;
		ZSH: string;
		ZDOTDIR: string;
		USER: string;
		VSCODE_GIT_IPC_HANDLE: string;
		HOMEBREW_CELLAR: string;
		MCFLY_HISTORY_FORMAT: string;
		MCFLY_RESULTS: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NVM_CD_FLAGS: string;
		PAGER: string;
		HOMEBREW_REPOSITORY: string;
		XPC_SERVICE_NAME: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_package_json: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		PATH: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		NVM_BIN: string;
		npm_node_execpath: string;
		OLDPWD: string;
		__CF_USER_TEXT_ENCODING: string;
		TERM_PROGRAM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
