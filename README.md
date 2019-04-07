![npm](https://img.shields.io/npm/v/eslint-plugin-altesis.svg?color=green&label=npm%20eslint-plugin-altesis&logo=eslint-plugin-altesis&style=flat-square)

# eslint-plugin-altesis

Enforce indentation when function argument list is on a new line so that it follows that of the functon's body.
This is a tribute to Kevlin Henney visual style guidelines.

## Example

the visually incoherent "one true style" fucntion declaration indentation
```javascript
function myFunc (arg1, arg2) {
  cosnt myConst = 'myString'
  // ... code here
}
```
becomes
```javascript
function myFunc
  (arg1, arg2)
{
  cosnt myConst = 'myString'
  // ... code here
}
```
for better visual indentation lineup, in accordance to [@KevlinHenney](https://twitter.com/KevlinHenney) visula style guide


## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-altesis`:

```
$ npm install eslint-plugin-altesis --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-altesis` globally.

## Usage

Add `altesis` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "altesis"
  ]
}
```

The plugin also takes care of activating the style rules and the configuration as per ESLint rules.
It does this by adding the following code:

```json
{
  "rules": {
    "altesis/altesis": "error",
  }
}
```

and

```json
{
    "extends": [
        "eslint:recommended",
        "plugin:altesis/altesis"
    ]
}
```


## Rules and Configs exported

The plugin exports a config: **`altesis`** that regulates code style and a rule, also **`altesis`**, that raises error in ESLint inline and fixes the errors on `eslint . --fix`.
Feel free to explore the source code and pull-request modifications, expecially if you are a fan of Mr. Henney.
