import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


export default function Page2() {
    const [Departments, setDepartments] = useState([{ name: "D1", parent: 0, children: [], expand: false }, { name: "D2", parent: 0, children: [], expand: false }, { name: "D3", parent: 0, children: [], expand: false }, { name: "D4", parent: 0, children: [], expand: false }])
    const [ChildDepartment, setChildDepartment] = useState([{ name: "D5", parent: 0, children: [], expand: false }, { name: "D6", parent: 0, children: [], expand: false }, { name: "D7", parent: 0, children: [], expand: false }, { name: "D8", parent: 0, children: [], expand: false }])

    const loadChilds = (index) => {
        let tmpArray = Departments;
        tmpArray[index].children = ChildDepartment
        setDepartments([...tmpArray])
    }
    const ExpansionHandler = (item, index) => {
        let tmpArray = Departments;
        // tmpArray[index].expand = !tmpArray[index].expand;
        for (let i = 0; i < tmpArray.length; i++) {
            if (i == index) {
                tmpArray[i].expand = !tmpArray[i].expand;
                if (tmpArray[i].expand) {
                    loadChilds(i)
                }
            } else {
                tmpArray[i].expand = false;
            }
        }
        setDepartments([...tmpArray])
    }

    return (
        <div style={{ padding: 20, justifyContent: 'center', width: '100%', display: 'flex', width: '100%' }}>
            {
                Departments.map((item, index) => {
                    return (
                        <div key={"page2" + index} style={{ padding: 20, width: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Button as="a" variant={item.expand ? "primary" : 'success'} style={{ margin: 10, width: 100 }} onClick={() => ExpansionHandler(item, index)}>
                                {item.name}
                            </Button>

                        </div>
                    )

                })
            }
        </ div>
    )

}