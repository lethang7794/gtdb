# GTDB - Safe Driving in Vietnam

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/gtdb)

View online at:

- Production: [gtdb.app](https://gtdb.app), [gtdb-2jt.pages.dev](https://gtdb-2jt.pages.dev/)
- Staging: [gtdb.vercel.app](https://gtdb.vercel.app/)
- Dev (local): [localhost:3000](http://localhost:3000)

Summary: A collection of resources to be a better driver in Vietnam.

- Road signs
- Road markings
- Driving laws
  - Luật Trật tự, an toàn giao thông đường bộ (2024)
  - Nghị định 168/2024 - Xử phạt vi phạm trong giao thông đường bộ
  - ...

## Getting Started

<details>
<summary>
See more
</summary>

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

</details>

## License

This project is licensed under the terms of the [MIT license](/LICENSE).

## Regression checks

Use Node.js 22.18 or newer and run `npm test`; no dependency installation is needed for these checks. Tests cover legal section identifiers, chapter navigation, article matching, share-link encoding, and native sharing/clipboard failures. The checked-in YAML identifiers are included in the tests.

When changing a provision's identifier, update both its YAML entry and MDX anchor, and preserve previously shared URLs where possible. Keep dotted identifiers such as `6.10` quoted as YAML strings without embedding quote characters in their values.

These checks validate navigation and data structure, not the current legal accuracy of the content. Verify legal amendments against their official sources before editing the text. Run `pnpm build` after installing dependencies to validate the complete site.

The point labels corrected in Articles 16 and 40 of Decree 168 were checked against the [Government's published original text](https://xaydungchinhsach.chinhphu.vn/toan-van-nghi-dinh-168-2024-nd-cp-quy-dinh-xu-phat-vi-pham-hanh-chinh-ve-trat-tu-atgt-duong-bo-119241231164556785.htm). This does not establish whether later amendments have been incorporated throughout the site.
