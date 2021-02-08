<template>
  <mdb-navbar color="unique-color" dark>
    <mdb-navbar-brand href="https://mdbootstrap.com/">
      ClimbingUA
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href="/" active>Домой</mdb-nav-item>
        <mdb-nav-item href="/Climb">О скалолазании</mdb-nav-item>
        <mdb-nav-item href="/About">О нас</mdb-nav-item>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="unique-color" slot="toggle" waves-fixed >Где полазить?</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Боулдер залы</mdb-dropdown-item>
            <mdb-dropdown-item>Скалолазные районы</mdb-dropdown-item>
            <mdb-dropdown-item>Лазание на трудность</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
      <form>
        <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
      </form>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbInput, mdbDropdownItem } from 'mdbvue';
  export default {
    name: 'NavbarPage',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbDropdown,
      mdbDropdownMenu,
      mdbDropdownToggle,
      mdbDropdownItem,
      mdbInput
    }
  }
</script>