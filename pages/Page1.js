import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { getChildDepartments, getRootDepartments } from './api/hello';
import Department from '../components/Department';


export default function Page1() {
    const [Departments, setDepartments] = useState([])
    const [ChildDepartment, setChildDepartment] = useState([{ name: "D5", parent: 0, children: [], expand: false }, { name: "D6", parent: 0, children: [], expand: false }, { name: "D7", parent: 0, children: [], expand: false }, { name: "D8", parent: 0, children: [], expand: false }])

    useEffect(() => {
        loadRootDepartments()
    }, [])

    const loadRootDepartments = () => {
        getRootDepartments().then(res => {
            console.log(res);
            setDepartments(res)
        })
    }

    

    return (
        <div style={{ padding: 20, justifyContent: 'center', width: '100%', display: 'flex', width: '100%' }}>
            {
                Departments.map((item, index) => {
                    return (
                       <Department item={item} index={index} />

                    )
                })
            }
        </ div>
    )

}