# GameZone Web Application  
## ICSI301 – Web Application Laboratory Work 1  

**University:** Монгол Улсын Их Сургууль  
**Department:** Мэдээлэл, Компьютерын Ухааны тэнхим  
**Course:** Веб аппликейшн (ICSI301)  
**Student:** Баттамир, Болортулга  
**Instructor:** Г. Сарнай  
**Date:** 2025.02.19  

---

## 📌 Project Overview

GameZone нь “Mobile Legends” тоглоомд суурилсан веб аппликейшн бөгөөд:

- Бооцоотой тоглолт зохион байгуулах  
- Тоглогчдын ур чадвараар орлого олох боломж бүрдүүлэх  
- Account худалдаа хийх  
- Тоглоомтой холбоотой мэдээ, мэдээлэл хүргэх  

зорилготой платформ юм.

---

## 🎯 Objectives

Энэхүү лабораторийн ажлын хүрээнд:

- Веб аппликейшний анхан шатны дизайн боловсруулах  
- User Experience (UX)-д суурилсан бүтэц гаргах  
- Card sorting аргаар site map боловсруулах  

---

## 🧱 System Architecture

Web application нь 3 үндсэн хэсгээс бүрдэнэ:

- **Frontend (Client)** – Хэрэглэгчийн интерфэйс  
- **Backend (Server)** – Бизнес логик, хүсэлт боловсруулах  
- **Database** – Өгөгдөл хадгалах  

---

## 📑 Main Features

### 🏠 Home
- Сүүлийн үеийн мэдээ
- Тоглоомын ерөнхий танилцуулга

### 👤 Profile
- Хэрэглэгчийн мэдээлэл
- Ялалтын статистик
- Хонжворын мэдээлэл
- Аватар тохируулах

### 🛒 Shop
- Account худалдах
- Үнийн санал тавих
- Санал сэтгэгдэл
- Account дэлгэрэнгүй харах

### 🎮 Arcade
- Match Betting бүртгэл
- Баг бүрдүүлэх
- Урилга илгээх
- Wallet ашиглах

### 👥 Teams
- Баг үүсгэх
- Тоглогч удирдах
- Бусад баг хайх

### 📰 News
- Mobile Legends шинэчлэлтүүд
- Emblem, item тайлбар
- Санал сэтгэгдэл бичих

### 🛠 Admin Panel
- Нийт хэрэглэгчийн статистик
- Users management
- Listings management
- News мэдээлэл оруулах

---

## 🗺 Site Structure
- Home
- Shop
- Arcade
- Wallet
- Profile

## CSS Structure

# MLBB Website - UI Components Checklist

## 🎯 Currently Used Components

### Core HTML Elements (Styled with Tailwind)
```html
<button />
<input />
<textarea />
<select />
<div className="modal" />
<div className="card" />
<form />
<label />
<table />
<img />
```

### Third-Party Components
```jsx
<motion.div /> // from motion/react
<Gamepad2 /> // Icons from lucide-react
toast() // from sonner
```

---

## 📦 Available UI Library Components (Not Currently Used)

### 🎨 **RECOMMENDED - Should Use These:**

#### Form Components
```jsx
<Button /> // ✅ Replace raw <button>
<Input /> // ✅ Replace raw <input>
<Textarea /> // ✅ Replace raw <textarea>
<Label /> // ✅ Replace raw <label>
<Select /> // ✅ Replace raw <select>
<Checkbox /> // For toggles
<Switch /> // Admin toggles
<Slider /> // ✅ Shop price range
<RadioGroup /> // Filter options
```

#### Layout Components
```jsx
<Card /> // ✅ Replace card divs
<CardHeader />
<CardContent />
<CardFooter />
<Separator /> // Divider lines
<ScrollArea /> // Custom scrollbars
<Tabs /> // ✅ Arcade & Admin tabs
<TabsList />
<TabsContent />
```

#### Modal/Dialog Components
```jsx
<Dialog /> // ✅ Replace modal divs
<DialogContent />
<DialogHeader />
<DialogTitle />
<DialogDescription />
<Sheet /> // Side panels
<Drawer /> // Mobile drawers
<AlertDialog /> // Confirmations
<Popover /> // Dropdowns
```

#### Display Components
```jsx
<Badge /> // ✅ Rank badges, status
<Avatar /> // ✅ User avatars
<AvatarImage />
<AvatarFallback />
<Tooltip /> // Hover info
<HoverCard /> // Rich hover info
<Alert /> // Notifications
<Progress /> // Loading bars
<Skeleton /> // Loading states
```

#### Data Display
```jsx
<Table /> // ✅ Admin tables
<TableHeader />
<TableBody />
<TableRow />
<TableCell />
<Accordion /> // Collapsible sections
<Collapsible /> // Expandable content
```

#### Navigation
```jsx
<DropdownMenu /> // User menus
<ContextMenu /> // Right-click
<NavigationMenu /> // Top nav
<Pagination /> // Page navigation
<Breadcrumb /> // Navigation trail
```

---

## 🔧 **Components You Should Integrate:**

### Priority 1 - High Impact ⭐⭐⭐
```jsx
✅ <Button variant="default|outline|ghost|destructive" />
✅ <Card />
✅ <Dialog />
✅ <Badge />
✅ <Tabs />
✅ <Table />
✅ <Avatar />
✅ <Input />
✅ <Slider />
✅ <Select />
```

### Priority 2 - Nice to Have ⭐⭐
```jsx
<Tooltip />
<AlertDialog />
<Separator />
<ScrollArea />
<Skeleton />
<Sheet />
<Checkbox />
<Switch />
<Progress />
```

### Priority 3 - Optional ⭐
```jsx
<DropdownMenu />
<Popover />
<HoverCard />
<Accordion />
<RadioGroup />
<ContextMenu />
<Pagination />
<Calendar />
<Carousel />
```

---

## 📋 Components by Page

### **HomePage** - Needs:
- `<Card />` - Action cards
- `<Button />` - All buttons
- `<Badge />` - Status indicators

### **ProfilePage** - Needs:
- `<Card />` - Profile container
- `<Input />` - Form fields
- `<Button />` - Actions
- `<Avatar />` - Profile picture
- `<AlertDialog />` - Delete confirmation
- `<Badge />` - Stats display
- `<Label />` - Form labels

### **ShopPage** - Needs:
- `<Card />` - Listing cards
- `<Input />` - Search bar
- `<Select />` - Rank filter
- `<Slider />` - Price range
- `<Badge />` - Rank badges
- `<Dialog />` - Create listing modal
- `<Button />` - Actions
- `<DropdownMenu />` - Sort options

### **ArcadePage** - Needs:
- `<Tabs />` - Betting/Live/Wallet tabs
- `<Card />` - Match cards, stream cards
- `<Button />` - Place bet, watch stream
- `<Input />` - Bet amount
- `<Dialog />` - Recharge modal
- `<Table />` - Transaction history
- `<Badge />` - Status indicators

### **TeamsPage** - Needs:
- `<Card />` - Team cards
- `<Dialog />` - Create team modal
- `<Input />` - Team name input
- `<Button />` - Join/Leave buttons
- `<Avatar />` - Member avatars
- `<Badge />` - Member roles

### **NewsPage** - Needs:
- `<Card />` - Article cards
- `<Badge />` - Category tags
- `<Skeleton />` - Loading states
- `<Button />` - Read more

### **AdminPage** - Needs:
- `<Tabs />` - Dashboard/Users/Listings tabs
- `<Card />` - Stat cards
- `<Table />` - User/listing tables
- `<Button />` - Actions
- `<Badge />` - Status indicators
- `<AlertDialog />` - Delete confirmations
- `<Switch />` - Admin toggle

### **AuthModal** - Needs:
- `<Dialog />` - Modal wrapper
- `<Input />` - Email/password fields
- `<Button />` - Sign in/up buttons
- `<Label />` - Form labels

---

## 🎨 Component Props Quick Reference

### Button
```jsx
<Button 
  variant="default|destructive|outline|secondary|ghost|link"
  size="default|sm|lg|icon"
  disabled={false}
  onClick={handleClick}
>
  Click Me
</Button>
```

### Card
```jsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Dialog
```jsx
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
  </DialogContent>
</Dialog>
```

### Tabs
```jsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Badge
```jsx
<Badge variant="default|secondary|destructive|outline">
  Badge Text
</Badge>
```

### Avatar
```jsx
<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

### Input
```jsx
<Input 
  type="text|email|password|number"
  placeholder="Enter text..."
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### Select
```jsx
<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

### Table
```jsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Header 1</TableHead>
      <TableHead>Header 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Slider
```jsx
<Slider
  defaultValue={[50]}
  max={100}
  step={1}
  onValueChange={(value) => setValue(value[0])}
/>
```

### Tooltip
```jsx
<Tooltip>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent>
    <p>Tooltip content</p>
  </TooltipContent>
</Tooltip>
```

---

## ✅ Migration Checklist

### Phase 1 - Core Components
- [ ] Replace all `<button>` with `<Button />`
- [ ] Replace card `<div>` with `<Card />`
- [ ] Replace all `<input>` with `<Input />`
- [ ] Add `<Badge />` for ranks/status
- [ ] Add `<Avatar />` for user images

### Phase 2 - Dialogs & Modals
- [ ] Replace AuthModal with `<Dialog />`
- [ ] Replace create listing modal with `<Dialog />`
- [ ] Replace recharge modal with `<Dialog />`
- [ ] Replace create team modal with `<Dialog />`
- [ ] Add `<AlertDialog />` for confirmations

### Phase 3 - Complex Components
- [ ] Replace Arcade tabs with `<Tabs />`
- [ ] Replace Admin tabs with `<Tabs />`
- [ ] Replace admin tables with `<Table />`
- [ ] Add `<Select />` for dropdowns
- [ ] Add `<Slider />` for price range

### Phase 4 - Enhancements
- [ ] Add `<Tooltip />` for helpful hints
- [ ] Add `<Skeleton />` for loading states
- [ ] Add `<ScrollArea />` for custom scrolls
- [ ] Add `<Separator />` for dividers
- [ ] Add `<Progress />` for loading bars

---

## 🎯 Benefits of Using UI Library Components

### Consistency ✅
- Unified design system
- Consistent spacing & sizing
- Same interaction patterns

### Accessibility ♿
- Built-in ARIA labels
- Keyboard navigation
- Screen reader support

### Maintainability 🔧
- Centralized styling
- Easy theme updates
- Less custom CSS

### Features 🚀
- Advanced variants
- Built-in animations
- State management
- Error handling

### Development Speed ⚡
- Pre-built components
- Less boilerplate
- Faster iterations

---

## 📊 Current vs Recommended

| Element | Current | Recommended | Benefit |
|---------|---------|-------------|---------|
| Buttons | `<button className="...">` | `<Button variant="...">` | Variants, consistency |
| Inputs | `<input className="...">` | `<Input />` | Validation, states |
| Cards | `<div className="bg-card...">` | `<Card />` | Structure, composition |
| Modals | Custom div + backdrop | `<Dialog />` | Accessibility, state |
| Tabs | Custom state + buttons | `<Tabs />` | Navigation, ARIA |
| Tables | Raw `<table>` | `<Table />` | Responsive, styled |
| Badges | `<span className="...">` | `<Badge />` | Variants, consistent |
| Avatars | `<div className="rounded-full">` | `<Avatar />` | Fallback, image handling |

---

## 🔥 Quick Start - Replace Most Common

### 1. Replace Buttons (50+ instances)
```jsx
// Before
<button className="px-4 py-2 bg-primary...">Click</button>

// After
<Button>Click</Button>
```

### 2. Replace Cards (30+ instances)
```jsx
// Before
<div className="bg-card border rounded-xl p-6">...</div>

// After
<Card>
  <CardContent>...</CardContent>
</Card>
```

### 3. Replace Inputs (20+ instances)
```jsx
// Before
<input type="text" className="w-full px-4 py-2..." />

// After
<Input type="text" />
```

### 4. Replace Modals (5 instances)
```jsx
// Before
<div className="fixed inset-0 bg-black/70...">
  <div className="bg-card rounded-xl...">...</div>
</div>

// After
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent>...</DialogContent>
</Dialog>
```

---

## 💡 Pro Tips

1. **Start Small:** Replace buttons first (highest ROI)
2. **Test Incrementally:** One component type at a time
3. **Keep Styling:** Add custom classes with `className` prop
4. **Use Variants:** Leverage built-in variants before custom
5. **Import Once:** Import all components at top of file
6. **Compose:** Combine components for complex UIs
7. **Theme:** Customize via CSS variables in theme.css

---

**Last Updated:** February 27, 2026
**Status:** 📝 Migration Recommended

