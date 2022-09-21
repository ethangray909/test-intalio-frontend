
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { getChildDepartments } from '../pages/api/hello';

export default function Department(props) {

    const [item, setItem] = useState(props.item)
    const loadChilds = (arr, index) => {
        getChildDepartments(item.department_id).then(res => {
            if(res?.length > 0){
                let tmpItem = item
                console.log(res);
                tmpItem.children = res;
                tmpItem.expand = true;
                setItem({...tmpItem})
            }
            
        })

    }
    const ExpansionHandler = () => {
        loadChilds()
        // console.log(arr);
        // // tmpArray[index].expand = !tmpArray[index].expand;
        // for (let i = 0; i < arr?.length; i++) {
        //     if (i == index) {
        //         arr[i].expand = !arr[i].expand;
        //         if (arr[i].expand) {
        //             loadChilds(arr, i)
        //         }
        //     } else {
        //         arr[i].expand = false;
        //     }
        // }
        // setDepartments([...arr])
    }

    return (
        <div key={item?.id} style={{   display: 'flex', flexDirection: 'column' }}>
            <Button as="a" variant={item?.expand ? "primary" : 'success'} style={{ margin: 10, width: 100 }} onClick={() => ExpansionHandler()}>
                {item?.departmentName}
            </Button>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                {
                    item?.children?.length > 0 && item.expand
                        ?
                        item?.children?.map((item, index) => {
                            return (
                                <Department item={item} index={index} />
                            )
                        })
                        :
                        null
                }
            </div>
        </div>
    )

}