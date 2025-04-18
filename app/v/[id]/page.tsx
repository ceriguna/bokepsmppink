import {
    CalendarIcon,
    CubeIcon,
    DownloadIcon,
    LapTimerIcon,
    RocketIcon,
    Share1Icon,
} from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata, ResolvingMetadata } from "next";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { humanDuration, humanSize } from "@/lib/utils";
import { SITENAME } from "@/lib/constants";
import Script from "next/script";

import { Button } from "@/components/ui/button";
import CopyButton from "@/components/copy-button";
import LikeButton from "@/components/like-button";
import Link from "next/link";
import MessageBox from "@/components/message-box";
import React from "react";
import SearchCardList from "@/components/search/search-list";
import doodstream from "@/lib/doodstream";

type PageProps = {
    params: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params }: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const data = await doodstream.getFile({ file_code: params.id as string });
     const upstream = await doodstream.getUpstream();
    if (data.status !== 200) {
        return {
            title: data.msg,
            description: "Something went wrong. Please try again later.",
        };
    }

    const file = data.result[0];
    const title = `${file.title}`;
    const description = `${file.title} di ${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Xpanas Viral Terbaru Bocil Ngentot Jilbab`;
    const image = file.splash_img;
    const previousOgImages = (await parent).openGraph?.images || [];
    const previousTwImages = (await parent).twitter?.images || [];

    return {
        title,
        description,
        twitter: {
            title,
            description,
            images: [...previousTwImages, image],
        },
        openGraph: {
            title,
            description,
            images: [...previousOgImages, image],
            url: `/v/${file.filecode}`,
            type: `article`,
        },
        alternates: {
            canonical: `/v/${file.filecode}#${file.title}`,
        },
    };
}

export default async function Video({ params }: PageProps) {
    const data = await doodstream.getFile({ file_code: params.id as string });
    const upstream = await doodstream.getUpstream();

    if (data.status !== 200) {
        return (
            <MessageBox title={data.msg} countdown={30} variant="error">
                <p className="text-center">
                    Something went wrong. Please try again later.
                </p>
            </MessageBox>
        );
    }

    const file = data.result[0];
	const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${file.title}`,
        image: file.splash_img,
        description: `${file.title} di ${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Xpanas Viral Terbaru Bocil Ngentot Jilbab`,
        url: `https://bokepsmppink.pages.dev/v/${file.filecode}#${file.title}`,
        datePublished: new Date(
            file.uploaded + ".000Z"
        ).toISOString(),
        publisher: {
            '@type': 'Organization',
            name: `${SITENAME}`,
            logo: 'https://bokepsmppink.pages.dev/favicon.ico'},
            author: {
                '@type': 'Person',
                name: 'admin',
                url: 'https://bokepsmppink.pages.dev'
              }
        }
        const jsonLd2 = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${file.title}`,
        image: file.splash_img,
        description: `${file.title} di ${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Xpanas Viral Terbaru Bocil Ngentot Jilbab`,
        url: `https://bokepsmppink.pages.dev/v/${file.filecode}#${file.title}`,
        datePublished: new Date(
            file.uploaded + ".000Z"
        ).toISOString(),
        publisher: {
            '@type': 'Organization',
            name: `${SITENAME}`,
            logo: 'https://bokepsmppink.pages.dev/favicon.ico'},
            author: {
                '@type': 'Person',
                name: 'admin',
                url: 'https://bokepsmppink.pages.dev'
              }
        }
    return (
        <div className="grid col-span-full gap-4 md:gap-4 md:mx-10" itemProp="video" itemScope itemType="http://schema.org/VideoObject">
<meta itemProp="author" content="admin" />
<meta itemProp="name" content={`${file.title}`} />
<meta itemProp="description" content={`${file.title} di ${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Xpanas Viral Terbaru Bocil Ngentot Jilbab`} />
<meta itemProp="duration" content={`${file.length}`} />
<meta itemProp="thumbnailUrl" content={`${file.splash_img}`} />
<meta itemProp="embedURL" content={`https://doodstream.com/e/${file.filecode}#${file.title}`} />
<meta itemProp="uploadDate" content={`${new Date(
            file.uploaded + ".000Z"
        ).toISOString()}`} />
        <section>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
        {/* ... */}
        </section>
            <iframe
                className="w-full h-[30vh] md:h-[55vh] lg:h-[70vh]"
                src={`https://doodstream.com/e/${file.filecode}`}
                scrolling="no"
                title={file.title}
                frameBorder={0}
                allowFullScreen={true}
            ></iframe>
            <Card className="mx-2 mb-8">
                <CardHeader>
                    <CardTitle className="text-xl md:text-3xl font-bold">
                        {file.title}
                    </CardTitle>
                </CardHeader>
            <p>{file.title} di {SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Xpanas Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma Viral Video Bokep Indo Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma Jepang Jav Barat Simontok hub sotwe olmek avtube pijat pure gudang pemerkosaan rumah tobrut inggris ngintip vcs binor yandex update remaja {SITENAME} wiki raja bokeptube full porno seponga simontok {file.title} <center><iframe title='ads' allowFullScreen={true} frameBorder={0} height='250' scrolling='no' src='https://ceriguna.blogspot.com' width='300'></iframe></center> playbokep indobokep xpanasonline indoh janda streaming jepang barat korea japan jav cina japanese china rusia arab india thailand hd anime hentai bokepsmppink gudang avtub pijat sotwe rumah pemerkosaan inggris xpanas pure tobrut vcs ngintip binor {SITENAME} remaja yandex update perselingkuhan wiki raja full com porno indoh Hotbabes Big Tits Family Freeporn Ass Naked Celebs Nude Cam Hot Videos Fucking Free Porno Adult Movies Mom Freesex Nudelive Cams Women Stepmom Hotwife Bigtits Melons Tube Huge Tits Pornos Film x Titshits Pornofilme Nice Natural Fuq Girls Teen Sex Pornstars Tube Dick Jihad</p>
            <center><iframe title='ads' allowFullScreen={true} frameBorder={0} height='250' scrolling='no' src='https://ceriguna3.blogspot.com' width='300'></iframe></center>
</Card>
            <h2 className="text-2xl font-bold text-center my-4">
                Related Video {file.title}
            </h2><center><iframe title='ads' allowFullScreen={true} frameBorder={0} height='50' scrolling='no' src='https://ceriguna2.blogspot.com' width='300'></iframe></center>
            <SearchCardList query={file.title.split(" ")[3]} />
<Script src="https://js.juicyads.com/jp.php?c=947403z2v256s2w2x2f4x2c4&u=http%3A%2F%2Fwww.juicyads.rocks"/>
        </div>
    );
}