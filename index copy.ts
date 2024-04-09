type Props = {
    children:(width:number,height:number)=>(string|string[]),
    width:number,
    height:number,
}
const div  = (props:Props) =>{
    if(Array.isArray(props.children)){
        return props.children.map((child)=>div({...child,width:props.width,height:props.height})).join('\n')
    }else{
    let result = `┌${'─'.repeat(props.width-2)}┐\n`;
    let content = props.children(props.width-2,props.height-2).split('\n');
    content.forEach((line)=>{
        result += `│${line.padEnd(props.width-2)}│\n`
    })
    for (let i = 0; i < (props.height-content.length); i++) {
        result += `│${' '.repeat(props.width-2)}│\n`;
    }
    result += `└${'─'.repeat(props.width-2)}┘`;
    return  result
}
}
// create ui table with characters

        
// ─────┬────────
// | age | weight |
// ├─────┼────────┤
// │ 10  │   100  │
// │ 80  │  500   
// ─────┴─────


const width = process.stdout.columns
const height = process.stdout.rows - 4



console.clear()
console.log(div({children:(w,h)=>div(
	{
		children:(w1,h1)=>{
			return div({
                children:(w2,h2)=>{
                    return "hello world"
                },
                width:w1,
                height:h1
            })
		},
        width:w,
        height:h
	}

),width,height}) )
