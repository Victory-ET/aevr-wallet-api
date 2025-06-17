import express from 'express';
import Staking from '../models/stake.model.js';

const router = express.Router();


// POST /api/staking/seed - Hardcoded data insertion
router.post('/seed', async (req, res) => {
  try {
    // Clear existing data (optional - remove if you want to keep existing data)
    await Staking.deleteMany({});

    // Hardcoded sample data
    const stakingData = [
      {
        id: 1,
        title: "Luxury Downtown Apartment Complex",
        apr: "12% APR",
        sold: 45,
        minStake: "5,000,000 PAY",
        image: "https://example.com/apartment1.jpg",
        gallery: [
          "https://example.com/apartment1-1.jpg",
          "https://example.com/apartment1-2.jpg",
          "https://example.com/apartment1-3.jpg"
        ],
        category: "Residential",
        tags: ["luxury", "downtown", "apartment", "high-yield"]
      },
      {
        id: 2,
        title: "White Star Hotel & Event Center",
        apr: "10% APR",
        sold: 38,
        minStake: "2,000,000 PAY",
        image: "https://example.com/hotel1.jpg",
        gallery: [
          "https://example.com/hotel1-1.jpg",
          "https://example.com/hotel1-2.jpg"
        ],
        category: "Commercial",
        tags: ["hotel", "event-center", "hospitality", "stable"]
      },
      {
        id: 3,
        title: "Modern Office Building",
        apr: "8% APR",
        sold: 62,
        minStake: "10,000,000 PAY",
        image: "https://example.com/office1.jpg",
        gallery: [
          "https://example.com/office1-1.jpg",
          "https://example.com/office1-2.jpg",
          "https://example.com/office1-3.jpg",
          "https://example.com/office1-4.jpg"
        ],
        category: "Commercial",
        tags: ["office", "modern", "business", "long-term"]
      },
      {
        id: 4,
        title: "Beachfront Resort Villa",
        apr: "15% APR",
        sold: 23,
        minStake: "8,000,000 PAY",
        image: "https://example.com/villa1.jpg",
        gallery: [
          "https://example.com/villa1-1.jpg",
          "https://example.com/villa1-2.jpg"
        ],
        category: "Resort",
        tags: ["beachfront", "villa", "resort", "premium", "vacation"]
      },
      {
        id: 5,
        title: "Shopping Mall Complex",
        apr: "9% APR",
        sold: 71,
        minStake: "15,000,000 PAY",
        image: "https://example.com/mall1.jpg",
        gallery: [
          "https://example.com/mall1-1.jpg"
        ],
        category: "Commercial",
        tags: ["shopping", "retail", "mall", "diverse-income"]
      },
      {
        id: 6,
        title: "Student Housing Complex",
        apr: "11% APR",
        sold: 34,
        minStake: "3,000,000 PAY",
        image: "https://example.com/student1.jpg",
        gallery: [
          "https://example.com/student1-1.jpg",
          "https://example.com/student1-2.jpg",
          "https://example.com/student1-3.jpg"
        ],
        category: "Residential",
        tags: ["student", "housing", "education", "consistent"]
      }
    ];

    // Insert the data
    const insertedData = await Staking.insertMany(stakingData);

    res.status(201).json({
      success: true,
      message: `Successfully inserted ${insertedData.length} staking properties`,
      data: insertedData
    });

  } catch (error) {
    console.error('Error seeding staking data:', error);
    res.status(500).json({
      success: false,
      message: 'Error seeding staking data',
      error: error.message
    });
  }
});

// GET /api/staking/count - Get total count (useful for frontend)
router.get('/count', async (req, res) => {
  try {
    const count = await Staking.countDocuments({ isActive: true });
    res.json({ count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
