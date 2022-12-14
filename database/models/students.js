
/**
 * 
 * 

CREATE TABLE `students` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `` bigint DEFAULT '0' COMMENT 'Program Keahlian',
  `` bigint DEFAULT '0' COMMENT 'Pilihan Pertama PPDB',
  `` bigint DEFAULT '0' COMMENT 'Pilihan Kedua PPDB',
  `` varchar(10) DEFAULT NULL COMMENT 'Nomor Pendaftaran',
  `` varchar(10) DEFAULT NULL COMMENT 'Nomor Ujian Tes Tulis',
  `` varchar(100) DEFAULT NULL COMMENT 'Hasil Seleksi PPDB/PMB',
  `` bigint DEFAULT '0' COMMENT 'Gelombang Pendaftaran',
  `admission_type_id` bigint DEFAULT '0' COMMENT 'Jalur Pendaftaran',
  `photo` varchar(100) DEFAULT NULL,
  `achievement` text COMMENT 'Prestasi Calon Peserta Didik / Mahasiswa',
  `is_student` enum('true','false') NOT NULL DEFAULT 'false' COMMENT 'Apakah Siswa Aktif ? Set true jika lolos seleksi PPDB dan set FALSE jika sudah lulus',
  `is_prospective_student` enum('true','false') NOT NULL DEFAULT 'false' COMMENT 'Apakah Calon Siswa Baru ?',
  `is_alumni` enum('true','false','unverified') NOT NULL DEFAULT 'false' COMMENT 'Apakah Alumni?',
  `is_transfer` enum('true','false') NOT NULL DEFAULT 'false' COMMENT 'Jenis Pendaftaran : Baru / Pindahan ?',
  `re_registration` enum('true','false') DEFAULT NULL COMMENT 'Konfirmasi Pendaftaran Ulang Calon Siswa Baru',
  `start_date` date DEFAULT NULL COMMENT 'Tanggal Masuk Sekolah',
  `identity_number` varchar(50) DEFAULT NULL COMMENT 'NIS/NIM',
  `nisn` varchar(50) DEFAULT NULL COMMENT 'Nomor Induk Siswa Nasional',
  `nik` varchar(50) DEFAULT NULL COMMENT 'Nomor Induk Kependudukan/KTP',
  `prev_exam_number` varchar(50) DEFAULT NULL COMMENT 'Nomor Peserta Ujian Sebelumnya',
  `prev_diploma_number` varchar(50) DEFAULT NULL COMMENT 'Nomor Ijazah Sebelumnya',
  `paud` enum('true','false') DEFAULT NULL COMMENT 'Apakah Pernah PAUD',
  `tk` enum('true','false') DEFAULT NULL COMMENT 'Apakah Pernah TK',
  `skhun` varchar(50) DEFAULT NULL COMMENT 'No. Seri Surat Keterangan Hasil Ujian Nasional Sebelumnya',
  `prev_school_name` varchar(255) DEFAULT NULL COMMENT 'Nama Sekolah Sebelumnya',
  `prev_school_address` varchar(255) DEFAULT NULL COMMENT 'Alamat Sekolah Sebelumnya',
  `hobby` varchar(255) DEFAULT NULL,
  `ambition` varchar(255) DEFAULT NULL COMMENT 'Cita-Cita',
  `full_name` varchar(150) NOT NULL,
  `gender` enum('M','F') NOT NULL DEFAULT 'M',
  `birth_place` varchar(255) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `religion_id` bigint DEFAULT '0',
  `special_need_id` bigint DEFAULT '0' COMMENT 'Berkeburuhan Khusus',
  `street_address` varchar(255) DEFAULT NULL COMMENT 'Alamat Jalan',
  `rt` varchar(10) DEFAULT NULL COMMENT 'Alamat Jalan',
  `rw` varchar(10) DEFAULT NULL COMMENT 'Alamat Jalan',
  `sub_village` varchar(255) DEFAULT NULL COMMENT 'Nama Dusun',
  `village` varchar(255) DEFAULT NULL COMMENT 'Nama Kelurahan/Desa',
  `sub_district` varchar(255) DEFAULT NULL COMMENT 'Kecamatan',
  `district` varchar(255) DEFAULT NULL COMMENT 'Kota/Kabupaten',
  `postal_code` varchar(20) DEFAULT NULL COMMENT 'Kode POS',
  `residence_id` bigint DEFAULT '0' COMMENT 'Tempat Tinggal',
  `transportation_id` bigint DEFAULT '0' COMMENT 'Moda Transportasi',
  `phone` varchar(50) DEFAULT NULL,
  `mobile_phone` varchar(50) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `sktm` varchar(100) DEFAULT NULL COMMENT 'Surat Keterangan Tidak Mampu (SKTM)',
  `kks` varchar(100) DEFAULT NULL COMMENT 'Kartu Keluarga Sejahtera (KKS)',
  `kps` varchar(100) DEFAULT NULL COMMENT 'Kartu Pra Sejahtera (KPS)',
  `kip` varchar(100) DEFAULT NULL COMMENT 'Kartu Indonesia Pintar (KIP)',
  `kis` varchar(100) DEFAULT NULL COMMENT 'Kartu Indonesia Sehat (KIS)',
  `citizenship` enum('WNI','WNA') NOT NULL DEFAULT 'WNI' COMMENT 'Kewarganegaraan',
  `country` varchar(255) DEFAULT NULL,
  `father_name` varchar(150) DEFAULT NULL,
  `father_birth_year` year DEFAULT NULL,
  `father_education_id` bigint DEFAULT '0',
  `father_employment_id` bigint DEFAULT '0',
  `father_monthly_income_id` bigint DEFAULT '0',
  `father_special_need_id` bigint DEFAULT '0',
  `mother_name` varchar(150) DEFAULT NULL,
  `mother_birth_year` year DEFAULT NULL,
  `mother_education_id` bigint DEFAULT '0',
  `mother_employment_id` bigint DEFAULT '0',
  `mother_monthly_income_id` bigint DEFAULT '0',
  `mother_special_need_id` bigint DEFAULT '0',
  `guardian_name` varchar(150) DEFAULT NULL,
  `guardian_birth_year` year DEFAULT NULL,
  `guardian_education_id` bigint DEFAULT '0',
  `guardian_employment_id` bigint DEFAULT '0',
  `guardian_monthly_income_id` bigint DEFAULT '0',
  `mileage` smallint DEFAULT NULL COMMENT 'Jarak tempat tinggal ke sekolah',
  `traveling_time` smallint DEFAULT NULL COMMENT 'Waktu Tempuh',
  `height` smallint DEFAULT NULL COMMENT 'Tinggi Badan',
  `weight` smallint DEFAULT NULL COMMENT 'Berat Badan',
  `sibling_number` smallint DEFAULT '0' COMMENT 'Jumlah Saudara Kandung',
  `student_status_id` bigint DEFAULT '0' COMMENT 'Status siswa',
  `end_date` date DEFAULT NULL COMMENT 'Tanggal Keluar',
  `reason` varchar(255) DEFAULT NULL COMMENT 'Diisi jika peserta didik sudah keluar',
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL,
  `restored_at` datetime DEFAULT NULL,
  `created_by` bigint DEFAULT '0',
  `updated_by` bigint DEFAULT '0',
  `deleted_by` bigint DEFAULT '0',
  `restored_by` bigint DEFAULT '0',
  `is_deleted` enum('true','false') DEFAULT 'false',
  PRIMARY KEY (`id`),
  KEY `students_registration_number__idx` (`registration_number`) USING BTREE,
  KEY `students_identity_number__idx` (`identity_number`) USING BTREE,
  KEY `students_full_name__idx` (`full_name`) USING BTREE,
  KEY `students_first_choice_id__idx` (`first_choice_id`) USING BTREE,
  KEY `students_second_choice_id__idx` (`second_choice_id`) USING BTREE,
  KEY `students_major_id__idx` (`major_id`) USING BTREE,
  KEY `students_admission_phase_id__idx` (`admission_phase_id`) USING BTREE,
  KEY `students_admission_type_id__idx` (`admission_type_id`) USING BTREE,
  KEY `students_student_status_id__idx` (`student_status_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

 */

module.exports = (sequelize, DataTypes) => {
    const attributes = {
      major_id: {
        type: DataTypes.INTEGER,
      },
      first_choice_id: {
        type: DataTypes.INTEGER,
      },
      second_choice_id: {
        type: DataTypes.INTEGER,
      },
      registration_number: {
        type: DataTypes.STRING,
      },
      admission_exam_number: {
        type: DataTypes.STRING,
      },
      selection_result: {
        type: DataTypes.STRING,
      },
      admission_phase_id: {
        type: DataTypes.INTEGER,
      },
      admission_type_id: {
        type: DataTypes.INTEGER,
      },
      photo: {
        type: DataTypes.STRING,
      },
      achievement: {
        type: DataTypes.TEXT,
      },
      is_student: {
        type: DataTypes.ENUM('true', 'false'),
      },
      is_prospective_student: {
        type: DataTypes.ENUM('true', 'false'),
      },
      is_alumni: {
        type: DataTypes.ENUM('true', 'false'),
      },
      is_transfer: {
        type: DataTypes.ENUM('true', 'false'),
      },
      re_registration: {
        type: DataTypes.ENUM('true', 'false'),
      },
      start_date: {
        type: DataTypes.DATE,
      },
      identity_number: {
        type: DataTypes.STRING,
      },
      nisn: {
        type: DataTypes.STRING,
      },
      nik: {
        type: DataTypes.STRING,
      },
      prev_exam_number: {
        type: DataTypes.STRING,
      },
      prev_diploma_number: {
        type: DataTypes.STRING,
      },
      paud: {
        type: DataTypes.BOOLEAN,
      },
      tk: {
        type: DataTypes.BOOLEAN,
      },
      skhun: {
        type: DataTypes.STRING,
      },
      prev_school_name: {
        type: DataTypes.STRING,
      },
      prev_school_address: {
        type: DataTypes.STRING,
      },
      hobby: {
        type: DataTypes.STRING,
      },
      ambition: {
        type: DataTypes.STRING,
      },
      full_name: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.ENUM('M', 'F'),
      },
      birth_place:{
        type: DataTypes.STRING,
      },
      birth_date: {
        type: DataTypes.DATE,
      },
      religion_id: {
        type: DataTypes.INTEGER,
      },
      special_need_id: {
        type: DataTypes.INTEGER,
      },
      street_address: {
        type: DataTypes.STRING,
      },
      rt: {
        type: DataTypes.STRING,
      },
      rw: {
        type: DataTypes.STRING,
      },
      sub_village: {
        type: DataTypes.STRING,
      },
      village: {
        type: DataTypes.STRING,
      },
      sub_district: {
        type: DataTypes.STRING,
      },
      district: {
        type: DataTypes.STRING,
      },
      postal_code: {
        type: DataTypes.STRING,
      },
      residence_id: {
        type: DataTypes.INTEGER,
      },
      transportation_id: {
        type: DataTypes.INTEGER,
      },
      mobile_phone: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      sktm: {
        type: DataTypes.STRING,
      },
      kps: {
        type: DataTypes.STRING,
      },
      kip: {
        type: DataTypes.STRING,
      },
      kis: {
        type: DataTypes.STRING,
      },
      citizenship: {
        type: DataTypes.ENUM('WNI', 'WNA'),
      },
      country: {
        type: DataTypes.STRING,
      },
      father_name: {
        type: DataTypes.STRING,
      },
      father_birth_year: {
        type: DataTypes.DATE,
      },
      father_education_id: {
        type: DataTypes.xxx,
      },
      father_employment_id: {
        type: DataTypes.xxx,
      },
      father_monthly_income_id: {
        type: DataTypes.xxx,
      },
      father_special_need_id: {
        type: DataTypes.xxx,
      },
      mother_name: {
        type: DataTypes.xxx,
      },
      mother_birth_year: {
        type: DataTypes.xxx,
      },
      mother_education_id: {
        type: DataTypes.xxx,
      },
      mother_employment_id: {
        type: DataTypes.xxx,
      },
      mother_monthly_income_id: {
        type: DataTypes.xxx,
      },
      mother_special_need_id: {
        type: DataTypes.xxx,
      },
      guardian_name: {
        type: DataTypes.xxx,
      },
      guardian_birth_year: {
        type: DataTypes.xxx,
      },
      guardian_education_id: {
        type: DataTypes.xxx,
      },
      guardian_employment_id: {
        type: DataTypes.xxx,
      },
      guardian_monthly_income_id: {
        type: DataTypes.xxx,
      },
      mileage: {
        type: DataTypes.SMALLINT,
      },
      traveling_time: {
        type: DataTypes.SMALLINT,
      },
      height: {
        type: DataTypes.SMALLINT,
      },
      weight: {
        type: DataTypes.SMALLINT,
      },
      sibling_number: {
        type: DataTypes.xxx,
      },
      student_status_id: {
        type: DataTypes.INTEGER,
      },
      end_date: {
        type: DataTypes.DATE,
      },
      reason: {
        type: DataTypes.STRING,
      },
      created_by: {
        type: DataTypes.INTEGER,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_by: {
        type: DataTypes.INTEGER,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
      deleted_by: {
        type: DataTypes.INTEGER,
      },
      deleted_at: {
        type: DataTypes.DATE,
      },
      restored_by: {
        type: DataTypes.INTEGER,
      },
      restored_at: {
        type: DataTypes.DATE,
      },
      is_deleted: {
        type: DataTypes.ENUM('true', 'false')
      },
    };
  
    const Students = sequelize.define("students", attributes, {
      freezeTableName: true,
      timestamps: true,
      paranoid: true,
      underscored: true,
    });
  
    Students.associate = (models) => {
      /**
       *
       */
    };
  
    return Students;
  };
  
  