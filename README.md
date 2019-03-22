# eslint-plugin-kevlin-henney

Enforce indentation when function argument list is on a new line so that it follows that of the functon\&#39;s body

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-kevlin-henney`:

```
$ npm install eslint-plugin-kevlin-henney --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-kevlin-henney` globally.

## Usage

Add `kevlin-henney` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "kevlin-henney"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "kevlin-henney/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





