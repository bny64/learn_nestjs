module.exports = {
  //eslint는 자바스크립트만 해석할 수 있다.
  //eslint가 타입스크립트를 해석 할수 있게끔 parser를 지정
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    //tsconfigRootDir: __dirname, //루트 directory 안에 여러개의 프로젝트가 있을 경우 해당 프로젝트에서 root dir설정해줘야 한다.
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'], // 타입스크립트 문법이 들어있다.
  extends: [
    'plugin:@typescript-eslint/recommended', //@typescript-eslint/eslint-plugin에서 추천하는 규칙들로 타입스크립트 파일을 검사하겠다.
    'plugin:prettier/recommended', //포매팅 능력은 eslint보다 prettier가 월등하다.
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
