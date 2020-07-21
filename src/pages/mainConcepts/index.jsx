const learn = [
    {
        label: '1-6: 事件处理',
        points: [
            {
                text: '',
                comment: '',
            },
        ],
    },
    {
        label: '1-7: 条件渲染',
        points: [
            {
                text: '声明一个变量并使用if语句进行条件渲染',
                comment: '',
            },
            {
                text:
                    '与运算符 &&。如果条件是true，&& 右侧的元素就会被渲染，如果是false，React会忽略并跳过它',
                comment: '属于内联条件渲染的方法',
            },
            {
                text:
                    '组件return null，则会阻止组件渲染。PS：虽然阻止了组件渲染，但并不会影响组件的生命周期。',
                comment: '',
            },
            {
                text: '',
                comment: '',
            },
        ],
    },
];
console.log(learn);

const learnObj = {};

const addCourse = (cName) => {
    if (!cName) return;
    if (!Object.prototype.hasOwnProperty.call(learnObj, cName)) {
        learnObj[cName] = {
            label: cName,
            points: [],
        };
    }
};
const addCoursePoint = (cName, pText, pComment = '') => {
    if (Object.prototype.hasOwnProperty.call(learnObj, cName)) {
        learnObj[cName].points.push({
            text: pText,
            comment: pComment,
        });
    }
};
addCourse('test');
addCoursePoint('test', 'test', 'text');
