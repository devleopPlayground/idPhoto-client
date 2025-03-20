import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: '증명사진',
    description: '직접 사진을 촬영하거나 이미 촬영한 기본 사진을 업로드하여 증명사진으로 바꿔보아요!',
    applicationName: '증명사진',
    keywords: ['증명사진', '여권사진', 'ID photo'],
    creator: 'lsj0202',
    publisher: 'lsj0202',
    appLinks: {
      web: {
        url: 'http://localhost:3000',
        should_fallback: true,
      },
    },
  };
};
