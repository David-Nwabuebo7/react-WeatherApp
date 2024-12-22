/** @type {import('next').NextConfig} */

module.exports ={
    images:{
        unoptimized: true,
        remotePatterns:[
            {
                protocol:'https',
                hostname:'openweathermap.org'
            }
        ]
    },
     output: "export"
}
module.exports = nextConfig;
