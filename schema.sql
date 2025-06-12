-- Create tables
CREATE TABLE customers (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone TEXT
);

CREATE TABLE bookings (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  customer_id BIGINT REFERENCES customers(id),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
);

CREATE TABLE conversations (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  customer_id BIGINT REFERENCES customers(id),
  last_message TEXT,
  last_message_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  unread_count INTEGER DEFAULT 0
);

CREATE TABLE messages (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  conversation_id BIGINT REFERENCES conversations(id),
  sender_type TEXT NOT NULL,
  content TEXT NOT NULL
);

-- Create indexes
CREATE INDEX idx_bookings_customer_id ON bookings(customer_id);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_conversations_customer_id ON conversations(customer_id);
CREATE INDEX idx_messages_conversation_id ON messages(conversation_id);

-- Create RLS policies
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Allow public access to create bookings
CREATE POLICY "Allow public to create bookings"
ON bookings FOR INSERT
TO public
WITH CHECK (true);

-- Allow authenticated users to read all bookings
CREATE POLICY "Allow authenticated to read bookings"
ON bookings FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users to update bookings
CREATE POLICY "Allow authenticated to update bookings"
ON bookings FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Allow public to create customers
CREATE POLICY "Allow public to create customers"
ON customers FOR INSERT
TO public
WITH CHECK (true);

-- Allow authenticated users to read all customers
CREATE POLICY "Allow authenticated to read customers"
ON customers FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users to update customers
CREATE POLICY "Allow authenticated to update customers"
ON customers FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Allow authenticated users to manage conversations
CREATE POLICY "Allow authenticated to manage conversations"
ON conversations FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Allow authenticated users to manage messages
CREATE POLICY "Allow authenticated to manage messages"
ON messages FOR ALL
TO authenticated
USING (true)
WITH CHECK (true); 