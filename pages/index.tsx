import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import xml2js from 'xml2js'
import Hamburger from "../public/hamburger.png"
import Channel from '@/Components/ChannelComp'
import { useState } from 'react'

export default function Home(props: any) {
  const [onClick, setOnClick] = useState(false)
  return (
    <>
      <Image
        className={styles.hamburgerIcon}
        onClick={() => setOnClick((prev) => !prev)}
        src={Hamburger}
        alt="hamburgerIcon"
      />
      {props?.data?.channel.map((e: any) => (
        <Channel key={e?.lastBuildDate.join()} data={e} onClick={onClick}/>
      ))}
    </>
  );
}
export async function getServerSideProps() {
  const data = await axios("https://www.essentiallysports.com/feed/")
  let jsonData= {}
  var parser = new xml2js.Parser()
  jsonData = await parser.parseStringPromise(data.data)
  for await (let i of (jsonData as any).rss.channel[0].item){
    i.description = await parser.parseStringPromise(i.description)
  }
  return {
    props: {
      data: (jsonData as any)?.rss
    },
  }
}
