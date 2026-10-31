type GreetingProps = {
    name: string
 }


function Greeting({ name }: GreetingProps) {
    return <p>こんにちは、{name}さん</p>
    
}

export default Greeting
