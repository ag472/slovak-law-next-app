# Deployment Instructions

## 📦 Project Structure Overview

This is a complete Slovak Law Next.js 14 application with the following key features:

### ✅ Key Improvements Implemented
- **Server-Side Rendering (SSR)** with Next.js 14 App Router  
- **TypeScript** for type safety throughout the codebase
- **TailwindCSS v3** with responsive design and proper styling
- **Advanced Search API Endpoint** (`/api/search`)
- **5 Complete Slovak Legal Documents**: 
  - Ústava Slovenskej republiky (Constitution)
  - Trestný zákon (Criminal Code) 
  - Občiansky zákoník (Civil Code)
  - Zákonník práce (Labour Law)
  - Zákon o cestnej premávke (Transport Law)

### 🎯 Deployment Ready for Vercel

## 🔧 Deployment to Vercel (Recommended)

### Step 1: Create GitHub Repository
If you haven't already:
1. Go to [GitHub](https://github.com/new)
2. Name repository `slovak-law-next-app` 
3. Initialize with README and .gitignore (Node template)
4. Push your code to GitHub

### Step 2: Configure Vercel Deployment  

1. **Login to [Vercel](https://vercel.com/dashboard)**
2. **Connect your GitHub account** to Vercel
3. **Import your repository**: `slovak-law-next-app` 
4. **Vercel will auto-detect** it as a Next.js 14 project

### Step 3: Build and Deploy Configuration  

Vercel will automatically:
- Use the correct Next.js version (14.2)
- Run `npm run build` command as configured
- Set up proper environment variables if needed

### Step 4: Verify Deployment  

After successful deployment:
1. Visit your Vercel URL (e.g., `https://slovak-law-next-app.vercel.app`)
2. Check that all legal documents display correctly
3. Verify search functionality works on `/api/search` endpoint

## 🛠️ Troubleshooting Vercel Build Issues  

### Common Problems and Solutions:

**Problem**: Module not found errors for CSS files or paths:
```bash
Module not found: Can't resolve './About.css'
Module not found: Can't resolve '@/lib/legalData' 
```

**Solution**: These errors are resolved in the current codebase - all CSS imports have been removed and path references updated to local paths (e.g., `../lib/legalData.ts` instead of `@/lib/legalData`).

**Problem**: Build failures due to missing configuration  

**Solution**: The project includes all required files:
- `next.config.js` 
- `tsconfig.json`
- `tailwind.config.js`
- Proper directory structure for Next.js App Router

### Build Configuration Files:

1. **next.config.js**: Configured for Next.js 14 with App Router
2. **tsconfig.json**: TypeScript configuration for strict mode  
3. **tailwind.config.js**: Tailwind CSS with proper content paths
4. **postcss.config.js**: PostCSS configuration for Tailwind

## 📁 Project Files Structure  

```
slovak-law-next-app/
├── package.json          # Dependencies and build scripts  
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript setup  
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS setup for Tailwind
│
├── src/
│   ├── app/              # Next.js pages and API routes  
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── page.tsx      # Homepage (with search)
│   │   └── api/          # Search API endpoint
│   ├── components/       # UI Components (SearchBar, LegalDocument)
│   └── lib/              # Business logic and data sources  
│       └── legalData.ts  # Real Slovak law content with citations
│
├── public/               # Static assets  
└── styles/               # Global CSS files (if any)
```

## ✅ Post-Deployment Checklist  

1. **Verify Build Success**:
   - Vercel should show successful build and deployment
   - All project dependencies installed correctly

2. **Test Functionality**:
   - Homepage loads properly  
   - Search API endpoint responds (curl http://your-url/api/search)
   - All legal documents display with content and citations
   - About page loads without errors

3. **Check SEO Settings**:
   - robots.txt and sitemap.xml are generated
   - All pages have proper meta tags

## 🔄 Future Updates  

To update the application:
1. Make changes to your local codebase
2. Commit to GitHub 
3. Vercel will automatically rebuild and redeploy

### Example Update Workflow:

```bash
# Make changes locally:
git add .
git commit -m "Update: Added new legal document"
git push origin main

# Vercel will automatically detect and deploy the changes
```

## 🧪 Testing Your Deployment  

Before finalizing:
1. **Test Search Endpoint**:
   ```bash
   curl https://your-vercel-url/api/search?q=ustava
   ```

2. **Check Document Pages**:
   - Visit https://your-vercel-url/zakon/ustava-460-1992 
   - Validate that content displays properly

3. **Verify SEO**:
   - Check robots.txt: https://your-vercel-url/robots.txt
   - Validate sitemap.xml: https://your-vercel-url/sitemap.xml

## 📋 Summary  

The Slovak Law Next.js application has been thoroughly redesigned to address all issues from the original Vite/React version:

✅ **No More Demo Data** - Production-ready with real Slovak law content  
✅ **Server-Side Rendering** - For fast loading and SEO optimization 
✅ **Advanced Search API** - Real-time document search capability
✅ **Legal Disclaimer System** - On every document page for compliance
✅ **Complete Content Structure** - About page with project details

This fully functional Next.js 14 application is now ready to be successfully deployed to Vercel or any other hosting platform that supports Next.js applications!