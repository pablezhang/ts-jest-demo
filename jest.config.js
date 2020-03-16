
// jest.config.js
const { pathsToModuleNameMapper } = require('ts-jest/utils');

const fs = require('fs');
const jsonBuffer =  fs.readFileSync('./tsconfig.json');
const jsonString = jsonBuffer.toString();

//todo 使用正则去除json文件中的注释，即去掉行也去掉块级的注释
const regex = "(?<!:)\\/\\/.*|\\/\\*(\\s|.)*?\\*\\/";
// 去除JOSN字符串的注释

let tsconfigObj;
try{
  tsconfigObj =  JSON.parse(jsonString);
}catch (e) {
  console.warn("检查tsconfig.json是否为标准json文件，请不要在json文件中使用注释，末行不要加逗号");
  console.error(e);
  return
}
module.exports = {

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  coverageDirectory: "coverage",

  // A map from regular expressions to module names that allow to stub out resources with a single module
  // 设置别名，这里借助了ts-jest封装的helper功能
  // '^@App/(.*)$': '<rootDir>/src/$1',
  // '^lib/(.*)$': '<rootDir>/common/$1'
  moduleNameMapper: pathsToModuleNameMapper(tsconfigObj.compilerOptions.paths  ),

  moduleNameMapper:{
    '^@App/(.*)$': '<rootDir>/src/$1',
    '^lib/(.*)$': '<rootDir>/common/$1'
  },
  // A map from regular expressions to module names that allow to stub out resources with a single module
  // 设置别名，这里借助了ts-jest封装的helper功能
  // '^@App/(.*)$': '<rootDir>/src/$1',
  // '^lib/(.*)$': '<rootDir>/common/$1'

  // ts-jest 预置了三种模式： ts-jest、ts-jest/presets/js-with-ts、ts-jest/presets/js-with-babel
  // 区别参考：https://kulshekhar.github.io/ts-jest/user/config/#jest-preset
  // ts-jest代表只运行.ts .tsx文件，忽略.js文件
  preset: 'ts-jest',

  testEnvironment: "node",

};
