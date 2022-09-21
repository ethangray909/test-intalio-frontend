import { useState } from 'react';
import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page1 from './Page1';
import Page2 from './Page2';

export default function Home() {
  const [CurrentPage, setCurrentPage] = useState(1)

  return (
    <div className={styles.container} >
      <div style={{ padding: 20, justifyContent: 'center', width: '100%', display: 'flex' }}>
        <Stack direction="horizontal" gap={4} style={{ alignSelf: 'center' }}>
          <Button as="a" variant={CurrentPage == 1 ? "primary" : "success"} onClick={() => { setCurrentPage(1) }}>
            Hierarchy View
          </Button>
          <Button as="a" variant={CurrentPage == 2 ? "primary" : "success"} onClick={() => { setCurrentPage(2) }}>
            Grid View
          </Button>
        </Stack>
      </div>

      {
        CurrentPage == 1 ?
          <Page1 />
          :
          <Page2 />
      }
    </div >
  )
}
