import { useEffect, useState } from 'react'
import axios from 'axios'
import './About.css'

const About = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_HOSTNAME || ''}/api/about`)
            .then(res => setData(res.data))
            .catch(err=> console.error('About error:', err));
    }, [])

    if (!data) return null

    return (
        <>
          <main className="About">
            <h1>{data.title}</h1>
            <img src={data.photoUrl} alt={data.name} />
            <h2>{data.name}</h2>
            {data.paragraphs && data.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </main>
        </>
    )
}

export default About