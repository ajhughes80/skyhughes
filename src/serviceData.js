const services = {
    "real-estate": {
        title: "Real Estate & Property Marketing",
        icon: "🏠",
        tagline: "Helps properties sell faster and stand out online",
        description:
            "Elevate your property listings with stunning aerial footage that showcases every angle. Our drone videography captures the full scale and beauty of any property — from sprawling estates to charming neighborhood homes.",
        features: [
            "Residential home listings with cinematic aerial views",
            "Luxury property highlight reels",
            "Land & acreage showcase from above",
            "Real estate development overview footage",
            "Property walkthrough with exterior drone focus",
            "Neighborhood and surrounding area aerials",
        ],
        whyUs:
            "Buyers make decisions in seconds. A professional aerial video sets your listing apart, giving potential buyers an immersive view they can\u0027t get from ground-level photos alone. Our North Georgia mountain backdrop adds unmatched appeal.",
    },
    airbnb: {
        title: "Airbnb & Vacation Rental Content",
        icon: "🏡",
        tagline: "Designed to increase bookings and visibility",
        description:
            "Make your rental property irresistible with aerial video that highlights the cabin, the views, and the experience. Perfect for Blue Ridge, Helen, and North Georgia mountain rentals.",
        features: [
            "Cabin and vacation rental showcase videos",
            "Scenic surroundings — mountains, rivers, waterfalls",
            "Listing highlight reels for Airbnb & VRBO",
            "Social media promo clips (Instagram, TikTok, Facebook)",
            "Seasonal footage to refresh your listings year-round",
            "Twilight and golden hour aerial shots",
        ],
        whyUs:
            "In a competitive vacation rental market, stunning aerial content can make the difference between a booking and a scroll-past. We help your property tell its story from the sky.",
    },
    business: {
        title: "Business & Tourism Promotion",
        icon: "🏢",
        tagline: "Helps businesses attract more customers",
        description:
            "Showcase your business from a perspective your competitors can\u0027t match. From wineries and resorts to adventure outfitters, aerial video brings your brand to life.",
        features: [
            "Winery, resort, and lodge aerial tours",
            "Restaurant and venue scenic overviews",
            "Adventure business promos (tubing, hiking, zip-lining)",
            "Website and ad-ready promotional videos",
            "Google Business and social media content",
            "Brand storytelling with cinematic aerials",
        ],
        whyUs:
            "Tourism thrives on visuals. A professional aerial video on your website or social media can drive foot traffic, increase engagement, and position your business as a must-visit destination in the North Georgia mountains.",
    },
    weddings: {
        title: "Weddings & Special Events",
        icon: "💒",
        tagline: "Cinematic storytelling for once-in-a-lifetime moments",
        description:
            "Your special day deserves to be captured from every angle — including the sky. Our drone videography adds a cinematic, breathtaking dimension to your wedding memories.",
        features: [
            "Wedding venue aerial coverage",
            "Ceremony and reception highlight shots",
            "Engagement and proposal drone videos",
            "Anniversary celebration footage",
            "Bridal party and guest arrival aerials",
            "Sunset and golden hour ceremony captures",
        ],
        whyUs:
            "The mountains of North Georgia provide one of the most stunning wedding backdrops in the country. Our aerial footage ensures those views are part of your wedding story forever.",
    },
    family: {
        title: "Family & Personal Memory Films",
        icon: "👨‍👩‍👧‍👦",
        tagline: "Capture meaningful moments to keep forever",
        description:
            "Life\u0027s most meaningful moments deserve to be remembered beautifully. Our drone videography adds a unique, sweeping perspective to your family memories.",
        features: [
            "Family gatherings and milestone celebrations",
            "Home memory and legacy videos",
            "Pregnancy and newborn moments",
            "Moving-out or farewell videos",
            "Reunion and holiday gathering footage",
            "Property and homestead keepsakes",
        ],
        whyUs:
            "These are the moments you\u0027ll look back on for years. A drone perspective adds a timeless, cinematic quality that phone cameras simply can\u0027t replicate.",
    },
    outdoor: {
        title: "Outdoor & Adventure Experiences",
        icon: "🏔️",
        tagline: "Perfect for personal memories and social sharing",
        description:
            "Whether you\u0027re conquering a mountain trail or paddling a river, our drone footage captures the thrill and beauty of your outdoor adventures from above.",
        features: [
            "Hiking trips and scenic mountain journeys",
            "Camping and outdoor lifestyle footage",
            "River, lake, and kayaking aerials",
            "Personal adventure highlight reels",
            "Trail running and cycling coverage",
            "Follow-me drone shots for action sports",
        ],
        whyUs:
            "North Georgia is an outdoor paradise — from the Appalachian Trail to the Chattahoochee River. Let us capture your adventure from a perspective that does justice to the landscape.",
    },
    events: {
        title: "Events, Festivals & Community",
        icon: "🎪",
        tagline: "Great for marketing and community engagement",
        description:
            "From local festivals to community celebrations, aerial footage captures the energy and scale of your event like nothing else.",
        features: [
            "Local festivals and parades",
            "Concerts and live music events",
            "Community gatherings and fundraisers",
            "City and town promotional footage",
            "Sports events and tournaments",
            "Holiday celebrations and fireworks",
        ],
        whyUs:
            "Event organizers and local governments use our footage for promotion, documentation, and community pride. Show the full scope of your event from the sky.",
    },
    construction: {
        title: "Construction & Land Development",
        icon: "🏗️",
        tagline: "Useful for builders, developers, and investors",
        description:
            "Track your project\u0027s progress from start to finish with regular aerial documentation. Perfect for builders, developers, and investors who need a bird\u0027s-eye view.",
        features: [
            "Construction progress tracking (weekly/monthly)",
            "Before and after land transformation videos",
            "Development site overview for stakeholders",
            "Project documentation and reporting footage",
            "Investor presentation aerials",
            "Site inspection and survey support",
        ],
        whyUs:
            "Aerial documentation saves time and money by providing clear, comprehensive views of your project site. Impress investors and keep stakeholders informed with professional drone footage.",
    },
    farms: {
        title: "Farms, Ranches & Rural Properties",
        icon: "🌾",
        tagline: "Highlights scale and natural beauty",
        description:
            "Showcase the full scope of your agricultural land, ranch, or rural property. Drone footage reveals the scale and beauty that ground-level photos can never capture.",
        features: [
            "Farm and agricultural land aerial overview",
            "Livestock and ranch operation footage",
            "Large property marketing videos",
            "Rural estate and homestead showcase",
            "Crop and land condition documentation",
            "Boundary and fence line surveys",
        ],
        whyUs:
            "Selling or marketing a large rural property? Aerial video is essential for showing buyers the full picture. Our footage highlights the beauty and potential of every acre.",
    },
    commercial: {
        title: "Commercial & Creative Projects",
        icon: "🎬",
        tagline: "For advertising, branding, and creative media use",
        description:
            "From car dealership promos to brand storytelling, our aerial videography brings a professional, cinematic quality to your commercial and creative projects.",
        features: [
            "Automotive and dealership showcase videos",
            "Brand storytelling and identity content",
            "Creative and artistic video projects",
            "Stock footage production",
            "Music video and film production aerials",
            "Corporate event and facility overviews",
        ],
        whyUs:
            "High-quality aerial footage elevates any commercial project. Whether you need content for ads, social media, or your website, we deliver professional results that make your brand stand out.",
    },
};

export default services;
