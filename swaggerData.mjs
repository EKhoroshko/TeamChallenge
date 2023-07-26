const swaggerData = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Your API',
    description: 'Documentation for Your API',
  },
  basePath: '/',
  schemes: ['https'],
  host: 'us-central1-teamchalangestore.cloudfunctions.net',
  paths: {
    '/setUserInfo': {
      post: {
        summary: 'Create a new user',
        parameters: [
          {
            name: 'body',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/CreateUserDTO',
            },
          },
        ],
        responses: {
          200: {
            description: 'User created successfully',
            schema: {
              $ref: '#/definitions/UserData',
            },
          },
          400: {
            description: 'Invalid request format',
          },
          409: {
            description: 'User already exists',
          },
          500: {
            description: 'Internal server error',
          },
        },
      },
    },
    '/loginUser': {
      post: {
        summary: 'Login user',
        parameters: [
          {
            name: 'body',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/LoginUserDTO',
            },
          },
        ],
        responses: {
          200: {
            description: 'User logged in successfully',
            schema: {
              $ref: '#/definitions/UserData',
            },
          },
          400: {
            description: 'Invalid request format',
          },
          401: {
            description: 'Invalid password',
          },
          404: {
            description: 'User not found',
          },
          500: {
            description: 'Internal server error',
          },
        },
      },
    },
    '/getUserData': {
      get: {
        summary: 'Get user data',
        parameters: [
          {
            name: 'Authorization',
            in: 'header',
            required: true,
            type: 'string',
            description: 'Bearer token',
          },
        ],
        responses: {
          200: {
            description: 'User data retrieved successfully',
            schema: {
              $ref: '#/definitions/UserData',
            },
          },
          401: {
            description: 'No token provided / Invalid token',
          },
          404: {
            description: 'User not found',
          },
          500: {
            description: 'Internal server error',
          },
        },
      },
    },
    '/logoutUser': {
      post: {
        summary: 'Logout user',
        parameters: [
          {
            name: 'Authorization',
            in: 'header',
            required: true,
            type: 'string',
            description: 'Bearer token',
          },
        ],
        responses: {
          204: {
            description: 'Logged out successfully',
          },
          401: {
            description: 'No token provided / Invalid token',
          },
          404: {
            description: 'User not found',
          },
          500: {
            description: 'Internal server error',
          },
        },
      },
    },
    '/addItem': {
      post: {
        summary: 'Add a new item',
        parameters: [
          {
            name: 'body',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/ItemData',
            },
          },
        ],
        responses: {
          200: {
            description: 'Item added successfully',
            schema: {
              $ref: '#/definitions/ItemResponseData',
            },
          },
          500: {
            description: 'Internal server error',
          },
        },
      },
    },
    '/getAllItems': {
      get: {
        summary: 'Get all items',
        parameters: [
          {
            name: 'category',
            in: 'query',
            type: 'string',
            description: 'Filter items by category',
          },
          {
            name: 'subcategory',
            in: 'query',
            type: 'string',
            description: 'Filter items by subcategory',
          },
          {
            name: 'page',
            in: 'query',
            type: 'string',
            description: 'Page number',
          },
        ],
        responses: {
          200: {
            description: 'Items retrieved successfully',
            schema: {
              $ref: '#/definitions/ItemsResponseData',
            },
          },
          400: {
            description:
              'Cannot select only a subcategory. Please select a category.',
          },
          500: {
            description: 'Internal server error',
          },
        },
      },
    },
    '/addToFavorites': {
      post: {
        summary: 'Add item to favorites',
        parameters: [
          {
            name: 'body',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/AddToFavoritesDTO',
            },
          },
        ],
        responses: {
          200: {
            description: 'Item added to favorites successfully',
          },
          404: {
            description: 'User not found',
          },
          500: {
            description: 'Internal server error',
          },
        },
      },
    },
    '/getFavorites': {
      get: {
        summary: "Get user's favorite items",
        parameters: [
          {
            name: 'email',
            in: 'query',
            type: 'string',
            description: "User's email address",
          },
        ],
        responses: {
          200: {
            description: 'Favorite items retrieved successfully',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/ItemData',
              },
            },
          },
          404: {
            description: 'User not found',
          },
          500: {
            description: 'Internal server error',
          },
        },
      },
    },
    '/addSubscription': {
      post: {
        summary: 'Add a new subscription',
        parameters: [
          {
            name: 'body',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/AddSubscriptionDTO',
            },
          },
        ],
        responses: {
          200: {
            description: 'Subscription added successfully',
          },
          400: {
            description: 'Email is missing',
          },
          500: {
            description: 'Internal server error',
          },
        },
      },
    },
  },
  definitions: {
    CreateUserDTO: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
        },
        username: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
      required: ['email', 'username', 'password'],
    },
    LoginUserDTO: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
      required: ['email', 'password'],
    },
    UserData: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        token: {
          type: 'string',
        },
        subscription: {
          type: 'boolean',
        },
      },
    },
    ItemData: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        price: {
          type: 'number',
        },
        description: {
          type: 'string',
        },
        category: {
          type: 'string',
        },
      },
      required: ['name', 'price', 'description', 'category'],
    },
    ItemResponseData: {
      type: 'object',
      properties: {
        itemId: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        price: {
          type: 'number',
        },
        description: {
          type: 'string',
        },
        category: {
          type: 'string',
        },
      },
    },
    ItemsResponseData: {
      type: 'object',
      properties: {
        items: {
          type: 'array',
          items: {
            $ref: '#/definitions/ItemResponseData',
          },
        },
        currentPage: {
          type: 'number',
        },
        totalPages: {
          type: 'number',
        },
      },
    },
    AddToFavoritesDTO: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
        },
        itemId: {
          type: 'string',
        },
      },
      required: ['email', 'itemId'],
    },
    AddSubscriptionDTO: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
        },
      },
      required: ['email'],
    },
  },
};

export { swaggerData };
