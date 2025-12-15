---
"@nation-a/ui": minor
---

feat: add separate entry points for bundle optimization

- Add `./toast` subpath export for Toast component
- Add `./lottie` subpath export for Spinner component  
- Add `./providers` subpath export for LanguageProvider and Portal
- Move react-hot-toast and react-lottie to optional peerDependencies
- Set sideEffects: false for better tree-shaking

BREAKING CHANGE: 
- Toast must now be imported from `@nation-a/ui/toast`
- Spinner must now be imported from `@nation-a/ui/lottie`
