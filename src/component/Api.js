import React, { Component } from 'react';
import Choice  from "./choice";
import Head from './Head';
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Load extends Component {
    state ={
        array:[]
    }

    GetAPIdata = async(event) => {
        event.preventDefault();
        const Search = event.target.name;
        if( Search === 'SMALLdataSearch'){
            this.setState({ isValue: true });
            var url_api = await fetch(`http://www.filltext.com/?rows=32&id={number|1000} \
                &firstName={firstName}&lastName={lastName}&email={email}&phone={phone| \
                (xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`);
        }else{
            this.setState({ isValue: true });
            var url_api = await fetch(`http://www.filltext.com/?rows=1000&id={number|1000} \
                &firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone| \
                (xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`);
        }
        var  data = await url_api.json();
        this.setState({
            array: [...data]
        })
    }
  	render() {

    var data = this.state.array;
        if(!data.length){
           return(
                <div>
                    <Head />
                    <div><br/><Choice apiSearch = {this.GetAPIdata} /></div>
                </div>
            );
        }else{
            return (
                <div>
                <ReactTable data={data}
          columns={[
            {
              Header: "Person",
              columns: [
                {
                  Header: "First Name",
                  accessor : "firstName"
                },
                {
                  Header: "Last Name",
                  accessor: "lastName"
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "City",
                  accessor: "address.city"
                },
                {
                  Header: "Address",
                  accessor: "address.streetAddress"
                }
              ]
            }
          ]}
          defaultSorted={[
            {
              id: "id",
              desc: true
            }
          ]}
          defaultPageSize ={10}
          className="-striped -highlight"
        />
        </div>
        )}
    }
}
