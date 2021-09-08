import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
                <link rel="shortcut icon" href="icons/favicon.ico"/>
                <title>TV Tupi</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}