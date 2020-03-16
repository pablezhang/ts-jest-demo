一个使用`ts-jest`对`typescript`文件进行单元测试的demo。

## 安装依赖

```javascript
yarn add -D typescript ts-jest jest @types/jest
```

## 初始化jest

```javascript
jest --init
```
如果执行`jest --init`显示`jest 命令找不到`, 重启一下编辑器或者命令行窗口即可。

## 调整jest.config.js配置

`ts-jest` 预置了三种模式：

| `ts-jest/presets/default`
or `ts-jest` | 只关注 `.ts`  `.tsx` 文件 |
| --- | --- |
| `ts-jest/presets/js-with-ts` | `.js`  `.jsx`  `.ts`  `.tsx` 文件均可处理，需要在tsconfig.json文件中设置 `allowJs: true`  |
| `ts-jest/presets/js-with-babe` | `ts-jest` 处理 `Typescript` 文件， `Babel` 处理js文件 |

在 `jest.config.js` 中配置
![image.png](https://cdn.nlark.com/yuque/0/2020/png/213161/1584183033197-5ae4d048-2f16-44f5-9762-9f225ecafd9b.png#align=left&display=inline&height=556&name=image.png&originHeight=556&originWidth=806&size=48384&status=done&style=none&width=806)

在 `jest.config.js` 中设置 `ts` 的别名：
`jest.config.js` 要求的别名书写方式如下：

```javascript
  moduleNameMapper:{
    '^@App/(.*)$': '<rootDir>/src/$1',
    '^lib/(.*)$': '<rootDir>/common/$1'
  },
```

`ts-jest` 提供了一个辅助函数`pathsToModuleNameMapper`      来转换 `tsconfig.json` 中的别名设置。但是 `tsconfig.json` 为一个 `json` 文件， `javascript` 不能直接读取 `json` 文件中的值。官方推荐新建一个 `tsconfig.js` 的文件。但为了避维护两份 `tsconfig` 。我们不采用官方的做法，而是，在 `jest.config.js` 中，使用 `fs` 模块读取json文件（注意 `json` 文件中不要有注释，否则调用 `JSON.parse()` 方法时会报错）。    

到此，所有配置结束。可以开始愉快的单元测试了
在根目录新进 `test` 文件夹，新建一个 `sum.test.ts` 

```typescript
import sum from '../src/sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

运行 `npm run test` 
![image.png](https://cdn.nlark.com/yuque/0/2020/png/213161/1584326631017-fefb519a-4c5b-4f7b-af98-dffd8c015e4f.png#align=left&display=inline&height=386&name=image.png&originHeight=386&originWidth=836&size=24238&status=done&style=none&width=836)
本文完