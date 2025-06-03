# README

## Setup Instructions

1- Create a Supabase Project

Go to supabase.com and create a new project
Get your project URL and anon key from the project settings
Replace YOUR_SUPABASE_URL and YOUR_SUPABASE_ANON_KEY in the HTML file

2- Create the Database Table

Run this SQL in your Supabase SQL editor:

```sql
-- Create pets table

CREATE TABLE pets (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image_url TEXT,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security

ALTER TABLE pets ENABLE ROW LEVEL SECURITY;

-- Create policy so users can only see their own pets

CREATE POLICY "Users can view their own pets" ON pets
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own pets" ON pets
    FOR INSERT WITH CHECK (auth.uid() = user_id);
```

3- Create Storage Bucket

Go to Storage in your Supabase dashboard
Create a new bucket called pet-images
Make it public so images can be displayed
Set up the following policy for the bucket:

```sql

-- Allow users to upload their own images

CREATE POLICY "Users can upload their own images" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'pet-images' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Allow public access to view images
CREATE POLICY "Public can view images" ON storage.objects
    FOR SELECT USING (bucket_id = 'pet-images');
```

## Features

✅ Authentication: Sign up/sign in with email and password

✅ Add Pets: Store pet names and upload photos

✅ List Pets: View all your pets with their photos

✅ Image Storage: Photos are stored in Supabase storage

✅ Responsive Design: Works on mobile and desktop

✅ Security: Row-level security ensures users only see their own pets

The app includes three main views:

1.Auth Page: Sign up or sign in

2.Add Pet Page: Add new pets with names and photos

3.List Pets Page: View all your added pets

## Deploy

Test locally with `python3 -m http.server`
