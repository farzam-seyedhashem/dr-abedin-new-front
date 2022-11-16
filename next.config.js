/**
 * @type {import('next').NextConfig}
 */
const {i18n} = require('./next-i18next.config');
const withPWA = require('next-pwa')
const zlib = require("zlib");
const CompressionPlugin = require("compression-webpack-plugin");
const redirects = require('./redirectlist');
module.exports = withPWA({
    // pwa: {
    //     dest: 'public'
    // },

    async redirects() {
        return [
            ...redirects
        ];
    },
    reactStrictMode: false,
    i18n,
    compress: false,
    images: {
        minimumCacheTTL: 31536000,
        domains: ["api.karizmastone.com"],
        formats: ['image/avif', 'image/webp'],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        imageSizes: [16, 32, 48, 64, 96, 105, 128, 256, 320, 375, 384, 414, 480, 720, 1080, 1920, 1240, 1400, 810, 440, 600, 721],
    },
    webpack(config, {dev}) {
        // const env = dev ? "development" : "production";
        // if (env === "production") {
        // config.mode = 'production';
        config.plugins.push(
            new CompressionPlugin({
                filename: "[path][base].gz",
                algorithm: "gzip",
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0.8,
            }),
            new CompressionPlugin({
                filename: "[path][base].br",
                algorithm: "brotliCompress",
                test: /\.(js|css|html|svg)$/,
                compressionOptions: {
                    params: {
                        [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                    },
                },
                threshold: 10240,
                minRatio: 0.8,
            }),
        )
        return config;
    }

})
