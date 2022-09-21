import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { getAllDepartments, searchDepartments } from './api/hello';


export default function Page2() {
    const [SearchString, setSearchString] = useState('')
    const [Departments, setDepartments] = useState([{ name: "D1", parent: 0, children: [], expand: false }, { name: "D2", parent: 0, children: [], expand: false }, { name: "D3", parent: 0, children: [], expand: false }, { name: "D4", parent: 0, children: [], expand: false }])
    const [ChildDepartment, setChildDepartment] = useState([{ name: "D5", parent: 0, children: [], expand: false }, { name: "D6", parent: 0, children: [], expand: false }, { name: "D7", parent: 0, children: [], expand: false }, { name: "D8", parent: 0, children: [], expand: false }])

    const loadData = () => {
        getAllDepartments().then(res => {
            setDepartments(res)
        })
    }

    useEffect(() => {
        loadData()
    }, [])


    const searchDept = () => {
        if(SearchString=="" || SearchString == null) return
        searchDepartments(SearchString).then(res => {
            console.log("Searched", res);
            setDepartments([...res])
        })
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', marginTop:20}}>
                <Form.Control type="text" placeholder="Search Department" style={{ width: '30%', alignSelf: 'center', marginRight: 20,  }} value={SearchString} onChange={(e) => {
                    if (e.target.value == null || e.target.value == "") {
                        loadData()
                    } setSearchString(e.target.value)
                }} />
                <Button onClick={searchDept}>
                    Search
                </Button>
            </div>
            <div style={{ padding: 20, justifyContent: 'center', width: '100%', display: 'flex', width: '100%' }}>
                {
                    Departments.map((item, index) => {
                        return (
                            <div key={"page2" + index} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignSelf: 'center', }}>
                                <Button as="a" variant={item.expand ? "primary" : 'success'} style={{ margin: 10, alignItems: 'center', justifyContent: 'center' }} >
                                    {item.departmentName}
                                </Button>

                            </div>
                        )

                    })
                }
            </ div>
        </div>

    )

}