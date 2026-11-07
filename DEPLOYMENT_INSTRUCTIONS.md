# Complete Slovak Law Next.js Deployment - Fresh Setup  

## 🎯 Goal: Push Clean, Working Code to GitHub  

Since you've deleted the repo and want a fresh start with all fixes properly applied:

## ✅ Step-by-Step Commands

### 1. First, create a clean ZIP of your current working project:
```bash
cd /Users/nasespolocenstvo/.openclaw/workspace/slovak-law-next-app
zip -r -9 slovak-law-deployment.zip . \
  -x "node_modules/*" "*.git/*" ".DS_Store" "*__pycache__*" "*.log" ".*"
```

### 2. Prepare clean project folder (make a fresh copy):
```bash
cd /tmp
rm -rf slovak-law-clean
mkdir slovak-law-clean
cd slovak-law-clean

# Extract your project files (this ensures clean state)
unzip /Users/nasespolocenstvo/.openclaw/workspace/slovak-law-next-app/slovak-law-deployment.zip
```

### 3. Initialize fresh Git repository:
```bash
cd /tmp/slovak-law-clean

# Remove any existing git history that might cause conflicts  
rm -rf .git

# Initialize new clean repository
git init
git remote add origin https://github.com/YOUR_USERNAME/slovak-law-next-app.git

# Make sure all files are present and correct
ls -la src/
```

### 4. Push to GitHub (replace YOUR_USERNAME with your actual username):
```bash
# Add all files
git add .

# Commit everything  
git commit -m "Fresh deployment: Slovak Law Next.js with all Vercel fixes"
# Updated 2026-11-07

# Push to your fresh GitHub repo (you'll need to provide credentials)
git push -u origin main
```

### 5. Configure Vercel Deployment:
1. Go to https://vercel.com/dashboard
2. Connect your GitHub account 
3. Import repository `slovak-law-next-app`  
4. Let Vercel auto-detect Next.js 14 project
5. Ensure build settings are set to "Default" for Next.js projects

## 🔧 What This Ensures  

✅ No cached builds or stale artifacts  
✅ All fixes from `src/app/api/search/route.ts` are applied: 
   - Changed `@/lib/legalData` to `../lib/legalData.ts`
✅ All fixes from `src/app/page.tsx` are applied:
   - Changed `@/components/SearchBar` to `../components/SearchBar`
✅ All CSS file references removed from these files:
   - `src/app/about/page.tsx`  
   - `src/components/SearchBar.tsx`
   - `src/app/page.tsx`

## 📋 Final Check  

After successful GitHub push and Vercel deployment:
1. Visit your repo at https://github.com/YOUR_USERNAME/slovak-law-next-app  
2. Verify the commit shows all fixes properly applied
3. Visit Vercel dashboard to confirm successful build

## 🚀 What's Ready for Deployment  

Your project now has:
- Next.js 14 App Router with Server-Side Rendering (SSR)
- TypeScript for type safety throughout  
- TailwindCSS v3 with responsive design
- 5 Complete Slovak Legal Documents (Constitution, Criminal Code, Civil Code, Labour Law, Transport Law)  
- Functional API search endpoint: `/api/search?q=ustava`
- Legal Disclaimer System on every document page
- Complete About page with all project details

The Slovak Law website is now ready for successful deployment to Vercel or any hosting platform that supports Next.js applications!

## ⚠️ Important Note  
Replace `YOUR_USERNAME` in the commands above with your actual GitHub username. For example, if your GitHub handle is `spolocenstvo`, use:
```bash
git remote add origin https://github.com/spolocenstvo/slovak-law-next-app.git
```

## 🛠️ Troubleshooting Vercel Builds  

If you see build errors in Vercel after this clean push:
1. Check that all files have proper relative paths (not `@/` aliases)  
2. Verify no CSS references remain in source files
3. Make sure your GitHub repo is public or properly configured for Vercel access

This clean deployment approach should resolve all build cache problems and get your Slovak Law website building successfully on Vercel!