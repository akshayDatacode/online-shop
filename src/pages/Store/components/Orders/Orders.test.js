// scenarios
describe('Orders Component', () => {
  beforeEach(() => {
    // Clear mock before each test
    jest.clearAllMocks();
  });

  it('renders orders list heading', () => {
    render(<Orders />);
    expect(screen.getByText('Orders List')).toBeInTheDocument();
  });

  it('fetches and displays orders', async () => {
    // Mock the API response
    getOrders.mockResolvedValueOnce(mockOrders);

    render(<Orders />);

    // Wait for orders to load
    await waitFor(() => {
      expect(getOrders).toHaveBeenCalledTimes(1);
    });

    // Check if orders are displayed
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('Total Amount: 100')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();

    expect(screen.getByText('user@example.com')).toBeInTheDocument();
    expect(screen.getByText('Total Amount: 200')).toBeInTheDocument();
    expect(screen.getByText('Product 3')).toBeInTheDocument();
  });

  it('handles API error gracefully', async () => {
    // Mock API error
    getOrders.mockRejectedValueOnce(new Error('Failed to fetch'));

    render(<Orders />);

    // Wait for API call to complete
    await waitFor(() => {
      expect(getOrders).toHaveBeenCalledTimes(1);
    });

    // Should still render the heading but no orders
    expect(screen.getByText('Orders List')).toBeInTheDocument();
    expect(screen.queryByText('test@example.com')).not.toBeInTheDocument();
  });

  it('renders empty state when no orders', async () => {
    // Mock empty orders response
    getOrders.mockResolvedValueOnce({ data: { orders: [] } });

    render(<Orders />);

    await waitFor(() => {
      expect(getOrders).toHaveBeenCalledTimes(1);
    });

    expect(screen.getByText('Orders List')).toBeInTheDocument();
    expect(screen.queryByText('test@example.com')).not.toBeInTheDocument();
  });
});