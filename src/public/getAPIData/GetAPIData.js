const { Component } = require("react");


class GetDataCompanies extends Component{
    constructor(props){
        super(props)
        this.state = {apiResponse:''}
    }

    callAPI(){
        fetch('http://localhost:3005')
            .then(res=>res.json())
            .then(res=>res.this.setState({apiResponse:res}))
            .catch(err=> err)
    }

    componentDidMount(){
        this.callAPI()
        console.log(this.callAPI())
    }


    render(){
        return(
            <p>{this.state.apiResponse}</p>
        )
    }
}

export default GetDataCompanies