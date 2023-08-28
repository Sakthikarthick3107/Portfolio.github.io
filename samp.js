const data =  {
    programming:[
        {
            name:'java',
            image:'java'
        },
        {
            name:'python',
            image:'python'
        },
        
    ],
    frontend:[
        {
        name:'react',
        image:'java'
        },
        {
            name:'java',
            image:'java'
        },
    ],
    backend:[
        {
            name:'django',
            image:'rest'
        },
    ]
}
const categories = Object.keys(data).map(category => category);

console.log("Categories:", categories);