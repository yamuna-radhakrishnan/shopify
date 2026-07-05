import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { SupaBase } from './createClient';
import { getImgUrl } from './imgHelper';

const Farmer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data: products, error } = await SupaBase
        .from('farmer_products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching farmer products:', error);
      } else {
        setData(products || []);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div style={{ margin: '120px auto', textAlign: 'center' }}>
        <Typography variant="h5" color="textSecondary">Loading farmer products...</Typography>
      </div>
    );
  }

  return (
    <main id="main-content" style={{ margin: '100px auto', maxWidth: '1200px', padding: '0 16px' }}>
      <Typography variant="h3" component="h1" sx={{ fontFamily: "'DM Serif Display', serif", mb: 1, textAlign: 'center' }}>
        Farmer's Market
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 4, textAlign: 'center' }}>
        Products directly from local farmers — no middlemen, fair prices.
      </Typography>

      {data.length === 0 ? (
        <Typography variant="body1" color="textSecondary" sx={{ textAlign: 'center', py: 8 }}>
          No farmer products available yet. Check back soon.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={getImgUrl(item.img_url || '')}
                  alt={item.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {item.description}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    ₹{item.price} / kg
                  </Typography>
                  {item.farmer_name && (
                    <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                      Farmer: {item.farmer_name}
                    </Typography>
                  )}
                  {item.location && (
                    <Typography variant="caption" display="block" color="textSecondary">
                      Location: {item.location}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </main>
  );
};

export default Farmer;
