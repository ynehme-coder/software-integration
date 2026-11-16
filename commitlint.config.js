export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-case': [2, 'never', ['upper-case','pascal-case','start-case']],
        'header-max-length':[2,'always',100],
        'scope-enum':[2,'always',['api','ui','db','deps']]
    }
}