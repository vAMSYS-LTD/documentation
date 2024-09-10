{% callout type="warning" title="Work In Progress!" %}
Documentation is work in progress. If you notice discrepancies between documentation here and reality on vAMSYS, please let us know in Discord so we can fix it.
{% /callout %}

## What is vAMSYS

vAMSYS, the Virtual Airline Management System, is the leading VA management solution by users and feature-base in the industry. We provide platform access and second-line support services for hundreds of Virtual Airlines – which your VA might be one of.

vAMSYS is used by flight simulation enthusiasts to manage and simulate airline operations. It provides tools for tracking flights, managing fleets, and simulating real-world airline logistics. vAMSYS enhances the Virtual Airline experience by offering detailed analytics and realistic operational controls.

### Key Features and Responsibilities

- **Platform Access and Support**: vAMSYS provides access to our comprehensive management platform and offers second-line support services to the VAs using our system.
- **Data Management**: We maintain common account details (such as name or email address) and other user-related information.
- **Service Provider Role**: vAMSYS is a service provider supporting paying customers (the VAs hosted on our platform). We ensure the functionality and reliability of the platform.
- **VA Independence**: vAMSYS is not a virtual airline or an alliance of airlines. We do not provide first-line support to VA pilots, nor do we manage VA-specific operations such as flight approvals, route networks, or staff appointments. We also cannot intervene in VA-specific data without permission from VA management.

### Key Terms

**vAMSYS** => That's us! It stands for **V**irtual **A**irline **M**anagement **Sys**tem.  
**VA** => That's you! It stands for **V**irtual **A**irline.  
**Phoenix** => The pilot front-end of the platform. You can log in at [https://vamsys.io](https://vamsys.io).  
**VDS** => The part of the platform used to manage routes, aircraft, areas, etc.  
**Orwell** => The part of the platform used to manage your VA, including pilots, PIREP review, and other VA settings.  
**Pegasus** => Our ACARS tracker. Every pilot needs to have it installed and running to track their flights.  
**PIREP** => In the real world, this stands for Pilot Report. Pilots file PIREPs with vAMSYS, containing information about their flight. This flight record allows us to process their PIREP and produce scores.  
**Route** => A description and set of rules for how to get from point A to point B.

### Data Protection and Privacy
For the purposes of data protection legislation, when you provide your information on the vAMSYS website, vAMSYS LTD is the data controller. We share your data with VAs you are a member of for the purposes of them providing a service to you. More details can be found in the [vAMSYS Terms and Conditions](https://vamsys.io/legal) and the [Privacy Policy](https://vamsys.io/legal).

[//]: # (Learn how to get CacheAdvance set up in your project in under thirty minutes or it's free. {% .lead %})

[//]: # ()
[//]: # ({% quick-links %})

[//]: # ()
[//]: # ({% quick-link title="Installation" icon="installation" href="/" description="Step-by-step guides to setting up your system and installing the library." /%})

[//]: # ()
[//]: # ({% quick-link title="Architecture guide" icon="presets" href="/" description="Learn how the internals work and contribute." /%})

[//]: # ()
[//]: # ({% quick-link title="Plugins" icon="plugins" href="/" description="Extend the library with third-party plugins or write your own." /%})

[//]: # ()
[//]: # ({% quick-link title="API reference" icon="theming" href="/" description="Learn to easily customize and modify your app's visual design to fit your brand." /%})

[//]: # ()
[//]: # ({% /quick-links %})

[//]: # ()
[//]: # (Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste.)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (## Quick start)

[//]: # ()
[//]: # (Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.)

[//]: # ()
[//]: # (### Installing dependencies)

[//]: # ()
[//]: # (Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.)

[//]: # ()
[//]: # (```shell)

[//]: # (npm install @tailwindlabs/cache-advance)

[//]: # (```)

[//]: # ()
[//]: # (Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.)

[//]: # ()
[//]: # ({% callout type="warning" title="Oh no! Something bad happened!" %})

[//]: # (This is what a disclaimer message looks like. You might want to include inline `code` in it. Or maybe you’ll want to include a [link]&#40;/&#41; in it. I don’t think we should get too carried away with other scenarios like lists or tables — that would be silly.)

[//]: # ({% /callout %})

[//]: # ()
[//]: # (### Configuring the library)

[//]: # ()
[//]: # (Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.)

[//]: # ()
[//]: # (```js)

[//]: # (// cache-advance.config.js)

[//]: # (export default {)

[//]: # (  strategy: 'predictive',)

[//]: # (  engine: {)

[//]: # (    cpus: 12,)

[//]: # (    backups: ['./storage/cache.wtf'],)

[//]: # (  },)

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.)

[//]: # ()
[//]: # ({% callout title="You should know!" %})

[//]: # (This is what a disclaimer message looks like. You might want to include inline `code` in it. Or maybe you’ll want to include a [link]&#40;/&#41; in it. I don’t think we should get too carried away with other scenarios like lists or tables — that would be silly.)

[//]: # ({% /callout %})

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (## Basic usage)

[//]: # ()
[//]: # (Praesentium laudantium magni. Consequatur reiciendis aliquid nihil iusto ut in et. Quisquam ut et aliquid occaecati. Culpa veniam aut et voluptates amet perspiciatis. Qui exercitationem in qui. Vel qui dignissimos sit quae distinctio.)

[//]: # ()
[//]: # (### Your first cache)

[//]: # ()
[//]: # (Minima vel non iste debitis. Consequatur repudiandae et quod accusamus sit molestias consequatur aperiam. Et sequi ipsa eum voluptatibus ipsam. Et quisquam ut.)

[//]: # ()
[//]: # (Qui quae esse aspernatur fugit possimus. Quam sed molestiae temporibus. Eum perferendis dignissimos provident ea et. Et repudiandae quasi accusamus consequatur dolore nobis. Quia reiciendis necessitatibus a blanditiis iste quia. Ut quis et amet praesentium sapiente.)

[//]: # ()
[//]: # (Atque eos laudantium. Optio odit aspernatur consequuntur corporis soluta quidem sunt aut doloribus. Laudantium assumenda commodi.)

[//]: # ()
[//]: # (### Clearing the cache)

[//]: # ()
[//]: # (Vel aut velit sit dolor aut suscipit at veritatis voluptas. Laudantium tempore praesentium. Qui ut voluptatem.)

[//]: # ()
[//]: # (Ea est autem fugiat velit esse a alias earum. Dolore non amet soluta eos libero est. Consequatur qui aliquam qui odit eligendi ut impedit illo dignissimos.)

[//]: # ()
[//]: # (Ut dolore qui aut nam. Natus temporibus nisi voluptatum labore est ex error vel officia. Vero repellendus ut. Suscipit voluptate et placeat. Eius quo corporis ab et consequatur quisquam. Nihil officia facere dolorem occaecati alias deleniti deleniti in.)

[//]: # ()
[//]: # (### Adding middleware)

[//]: # ()
[//]: # (Officia nobis tempora maiores id iusto magni reprehenderit velit. Quae dolores inventore molestiae perspiciatis aut. Quis sequi officia quasi rem officiis officiis. Nesciunt ut cupiditate. Sunt aliquid explicabo enim ipsa eum recusandae. Vitae sunt eligendi et non beatae minima aut.)

[//]: # ()
[//]: # (Harum perferendis aut qui quibusdam tempore laboriosam voluptatum qui sed. Amet error amet totam exercitationem aut corporis accusantium dolorum. Perspiciatis aut animi et. Sed unde error ut aut rerum.)

[//]: # ()
[//]: # (Ut quo libero aperiam mollitia est repudiandae quaerat corrupti explicabo. Voluptas accusantium sed et doloribus voluptatem fugiat a mollitia. Numquam est magnam dolorem asperiores fugiat. Soluta et fuga amet alias temporibus quasi velit. Laudantium voluptatum perspiciatis doloribus quasi facere. Eveniet deleniti veniam et quia veritatis minus veniam perspiciatis.)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (## Getting help)

[//]: # ()
[//]: # (Consequuntur et aut quisquam et qui consequatur eligendi. Necessitatibus dolorem sit. Excepturi cumque quibusdam soluta ullam rerum voluptatibus. Porro illo sequi consequatur nisi numquam nisi autem. Ut necessitatibus aut. Veniam ipsa voluptatem sed.)

[//]: # ()
[//]: # (### Submit an issue)

[//]: # ()
[//]: # (Inventore et aut minus ut voluptatem nihil commodi doloribus consequatur. Facilis perferendis nihil sit aut aspernatur iure ut dolores et. Aspernatur odit dignissimos. Aut qui est sint sint.)

[//]: # ()
[//]: # (Facere aliquam qui. Dolorem officia ipsam adipisci qui molestiae. Error voluptatem reprehenderit ex.)

[//]: # ()
[//]: # (Consequatur enim quia maiores aperiam et ipsum dicta. Quam ut sit facere sit quae. Eligendi veritatis aut ut veritatis iste ut adipisci illo.)

[//]: # ()
[//]: # (### Join the community)

[//]: # ()
[//]: # (Praesentium facilis iste aliquid quo quia a excepturi. Fuga reprehenderit illo sequi voluptatem voluptatem omnis. Id quia consequatur rerum consectetur eligendi et omnis. Voluptates iusto labore possimus provident praesentium id vel harum quisquam. Voluptatem provident corrupti.)

[//]: # ()
[//]: # (Eum et ut. Qui facilis est ipsa. Non facere quia sequi commodi autem. Dicta autem sit sequi omnis impedit. Eligendi amet dolorum magnam repudiandae in a.)

[//]: # ()
[//]: # (Molestiae iusto ut exercitationem dolorem unde iusto tempora atque nihil. Voluptatem velit facere laboriosam nobis ea. Consequatur rerum velit ipsum ipsam. Et qui saepe consequatur minima laborum tempore voluptatum et. Quia eveniet eaque sequi consequatur nihil eos.)
